import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loginError, setLoginError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState('');
    let history = useHistory();

    const auth = getAuth();

    const singInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider);

    }

    const signUpUsingEmail = (name, email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                updateEmailSignUpProfile(name);
                setSignUpSuccess("Success! You have made it.")
                history.push('/login');
            })
            .catch(error => {
                // setError(error.message);
                console.log(error);
            })
    }

    const signInUsingEmail = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);

            })
            .catch(error => {
                const errorMessage = error.message;
                setLoginError(errorMessage);
                console.log(loginError);
            })
    }

    const updateEmailSignUpProfile = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => { })
            .catch((error) => {
                // An error occurred
                // ...
            });
    }

    useEffect(() => {
        const unsbscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsbscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    return {
        user,
        loginError,
        signUpSuccess,
        singInUsingGoogle,
        signUpUsingEmail,
        signInUsingEmail,
        updateEmailSignUpProfile,
        logOut
    }
}

export default useFirebase;