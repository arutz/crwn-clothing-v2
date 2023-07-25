import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFiqvFfeYczrqx0NvanXYCjyAiWL5hSAI",
  authDomain: "crwn-clothing-demo-project.firebaseapp.com",
  projectId: "crwn-clothing-demo-project",
  storageBucket: "crwn-clothing-demo-project.appspot.com",
  messagingSenderId: "231717393194",
  appId: "1:231717393194:web:ca5595ba29d077782c0453"
}

// Initialize Firebase
initializeApp(firebaseConfig)
// init provider
const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

// init db
export const db = getFirestore()

export const createUserDocument = async (userAuth, additionalInfo) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnap = await getDoc(userDocRef)
    if(!userSnap.exists()) {
        const {displayName, metadata, email, uid} = userAuth
        const { createdAt, creationTime, lastLoginAt, lastSignInTime } = metadata
        try {
            await setDoc(
                    userDocRef, {   
                        displayName,
                        email, uid,
                        createdAt,
                        creationTime,
                        lastLoginAt,
                        lastSignInTime,
                        ...additionalInfo
                    })
        } catch(error) {
            console.log(error)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
    if(!email || !password) return
    const userCred = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCred)
    if(userCred) {
        const {user} = userCred
        createUserDocument(user, displayName)
    }
    return userCred
}