import 
{ signInWithGooglePopup, 
createUserDocumentFromAuth
}
 from '../../utils/firebase/firebase.utils';
const SignIn = () =>{
    const logGoogleUser = async () =>{
        const { user }= await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    return(
    <>
        <div className="sign-in">
            <h2>Welcome to the Sign in Page</h2>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    </>
    )
}
export default SignIn;