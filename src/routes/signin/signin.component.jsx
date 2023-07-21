import React, { useEffect } from "react"
import { getRedirectResult } from 'firebase/auth'
import { auth, createUserDocument,
     signInWithGooglePopup,
      signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

async function fetchData() {
    const response = await getRedirectResult(auth)
    if(response) {
        return await createUserDocument(response.user)
    } else {
        return 'no auth data'
    }
}

const SignIn = () => {
    useEffect(() => {
        fetchData().then((response) => console.log(response))
    },[])
    const logGoogleUserPU = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocument(user)
    }
    return (
        <div>
            <button onClick={logGoogleUserPU}>Sign in with Google Pop Up</button>
            <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
        </div>
    )
}


export default SignIn