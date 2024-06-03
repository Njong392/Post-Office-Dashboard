import { useUserContext } from './useUserContext'
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { db } from '../config/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export const useAuth = () => {
    const { dispatch } = useUserContext()
    const [error, setError ] = useState(null)
    const [success, setSuccess] = useState(null)
    const navigate = useNavigate()
    //const [loading, setLoading] = useState(null)

    //check if user exists and dispatch actions for redirection to right pages
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: 'LOGIN', payload: user });
            } else {
                dispatch({ type: 'LOGOUT' });
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [dispatch]);

    // create new account
    const signUp = async(email, password, name, region, town, phoneNumber) => {
        try{
            // create new account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            try{
              // store additional info about user in firestore
              await setDoc(doc(db, "admin", user.uid), {
                name: name,
                region: region,
                town: town,
                phoneNumber: phoneNumber,
              });

              //if storing the data is successful, log user in
              dispatch({ type: "LOGIN", payload: user });
              console.log("user signed up");
              setError(false);
              setSuccess(true);

            } catch(err){
                //if storing the data is not successful, display error
                setError(err)
                console.log(err)
            }           
            
           
        } catch(err){
            console.log(err)
            setError(err)
        }
    }

    // log in
    const signIn = async(email, password) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            dispatch({ type: 'LOGIN', payload: user })
            console.log('user signed in') 
            setError(false)
            setSuccess(true)       
        } catch(err){
            console.log(err)
            setError(err)
        }
    }

    //sign in with google
    const signInWithGoogle = async()=> {
        try{
            const result = await signInWithPopup(auth, googleProvider)
            dispatch({ type: 'LOGIN', payload: result.user })
            console.log('signed in with google')
            setError(false)
            setSuccess(true)
        } catch(err){
            console.log(err)
            setError(err)
        }
    }

    // log out
    const logout = async() => {
        try{
            await signOut(auth)
            Cookies.remove('user')
            dispatch({type: 'LOGOUT'})
            navigate('/login')
            console.log('user logged out')
           
        } catch(err){
            console.log(err)
            setError(err)
        }
    }

    return { signUp, signIn, logout, signInWithGoogle, error, success }
}