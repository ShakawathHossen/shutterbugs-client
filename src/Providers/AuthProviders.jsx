import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';




export const AuthContext = createContext(null);
const auth = getAuth(app);








const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // create new user



    // sign in user 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in user

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // logout
    // update profile picture 

    const updateUserProfile = (name,photo) => {
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })       
    };

    // update profile picture 



    // check current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user', currentUser);
            // get and set jwt token 
          if (currentUser) {
            axios.post('https://shutter-bugs-server.vercel.app/jwt', {
                email: currentUser?.email
           })
           .then(data => {
            console.log('jwt token', data.data.token);
            localStorage.setItem('token', data.data.token);
            setLoading(false);

           })
          }
          else{
            localStorage.removeItem('token');
            setLoading(false);

          }

         
        });
        return () => {
            unsubscribe();
        };
    }, []);


    // check current user 

    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }



    return (
        <AuthContext.Provider value={authinfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;