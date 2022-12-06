import { initializeApp } from 'firebase/app';
import { getAuth, 
      signInWithRedirect,
      signInWithPopup,
       GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5pMVa_IKIwy2Pu1Gsa6D9MEajd08Rm9c",
    authDomain: "shopping-clothing-868a5.firebaseapp.com",
    projectId: "shopping-clothing-868a5",
    storageBucket: "shopping-clothing-868a5.appspot.com",
    messagingSenderId: "319772167260",
    appId: "1:319772167260:web:f77ef96eec65dbf8bcaa99"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new  GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
}