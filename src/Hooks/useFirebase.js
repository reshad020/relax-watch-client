import initializeFirebase from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut,onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

initializeFirebase();
const useFriebase = () =>{
    const [user,setUser] = useState({});
    const [loading,setLaoding] = useState(true);
    const [admin,setAdmin] = useState(false);
    const auth = getAuth();

    const registerWithEmailAndPassword = (email,password,name,history) =>{
        setLaoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const userData = {
                                email:email,
                                name:name};
                saveUser(userData);

                const user = userCredential.user;
                history.replace('/');

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

    const loginWithEmail = (email,password,history,location)=>{
        setLaoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const path = location?.state?.from || '/'
                history.replace(path);
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
        const saveUser = (userData) =>{
            console.log(userData)
            fetch('https://young-springs-44594.herokuapp.com/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(userData)
                })
                .then()
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


    useEffect(() => {
        fetch(`https://young-springs-44594.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        admin,
        user,
        registerWithEmailAndPassword,
        loading,
        logOut,
        loginWithEmail
    }

}

export default useFriebase;