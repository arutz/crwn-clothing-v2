import React from "react"
import { createUserDocument, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user)
        const ref = await createUserDocument(user)
        console.log(ref)
    }
    return (
        <div>
            <button onClick={logGoogleUser}>Sign in</button>
        </div>
    )
}


export default SignIn