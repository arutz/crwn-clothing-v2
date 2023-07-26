import React, { useState } from "react"
import './signon.styles.scss'
import {createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confimPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confimPassword } = formFields;
    
    console.log(formFields)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit= async (event) => {
        event.preventDefault()
        console.log("submit")
        if(password !== confimPassword) {
            alert("password do not match")
            return
        }
        try {
            const userCred = await createAuthUserWithEmailAndPassword(email, password, displayName)
            console.log(userCred)
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert(`error during user creation: ${error.code}`)
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email or google account</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} onChange={handleChange} name="displayName" type="text" value={displayName}/>
                <FormInput label='E-Mail' onChange={handleChange} type="email" name="email" value={email}/>
                <FormInput label='Password' onChange={handleChange} type="password" name="password" value={password}/>
                <FormInput label='Confirm Password'onChange={handleChange} type="password" name="confimPassword" value={confimPassword}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignUpForm