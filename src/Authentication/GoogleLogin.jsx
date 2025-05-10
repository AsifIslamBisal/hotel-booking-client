import React, { useContext } from 'react';
import authContext from '../context/AuthContext';
import { toast } from 'react-toastify';


const GoogleLogin = () => {

    const {signInWithGoogle} = useContext(authContext);
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
            .then(result =>{
                toast.success("Login successful!");
            })
            .catch(error =>{
                console.error(error);
                toast.error("Login failed: " + error.message);
            })
        
    }

    return (
        <div className='m-4'>
            <div className='divider'>OR</div>
            <button onClick={handleGoogleSignIn} className='btn bg-green-300'>Google</button>
        </div>
    );
};

export default GoogleLogin;