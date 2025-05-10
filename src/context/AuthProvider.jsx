import React, { useEffect, useState } from 'react';
import authContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.int';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser]  = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password, name, photoURl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            return updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL
            }).then( () => {
                setUser({...result.user, displayName: name, photoURl });
                return result;
            })
        })
    }

    const signInUser = (email, password,) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;