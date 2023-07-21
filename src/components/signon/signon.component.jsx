import React, { useState } from "react"
import './signon.styles.scss'

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

    return (
        <div className="signonform">
            <h1>Sign up with email or google account</h1>
                <form>
                    <div className="group">
                        <label className="form-input-label">Display Name</label>
                        <input className="form-input" onChange={handleChange} type="text" name="displayName" value={displayName}/>
                    </div>
                    <div className="group">
                        <label className="form-input-label">E-Mail</label>
                        <input className="form-input" onChange={handleChange} type="email" name="email" value={email}/>
                    </div>
                    <div className="group">
                        <label className="form-input-label">Password</label>
                        <input className="form-input" onChange={handleChange} type="password" name="password" value={password}/>
                    </div>
                    <div className="group">
                        <label className="form-input-label">Confirm Password</label>
                        <input className="form-input" onChange={handleChange} type="password" name="confimPassword" value={confimPassword}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            
            
        </div>
    )
}

export default SignUpForm