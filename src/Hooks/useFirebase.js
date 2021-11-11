import initializeFirebase from "../Pages/Login/FIrebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut,onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();
const useFriebase = () =>{
    const [user,setUser] = useState({});
    const [loading,setLaoding] = useState(true)
    const auth = getAuth();

    const registerWithEmailAndPassword = (email,password) =>{
        setLaoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('success')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                // ..
            })
            .finally(() => setLaoding(false));
    }

    const loginWithEmail = (email,password)=>{
        setLaoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setLaoding(false));;
    }

    const logOut = () =>{
        setLaoding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setLaoding(false));;
    }
    
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              setUser(user);
            } else {
              // User is signed out
              setUser({})
            }
            setLaoding(false)
          });
    },[])



    return {
        user,
        registerWithEmailAndPassword,
        loading,
        logOut,
        loginWithEmail
    }

}

export default useFriebase;