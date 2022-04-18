import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        alert('Update profile');
        console.log('Update profile');
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 className='text-center mt-2'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept our terms and condition</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn-primary d-block mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account. <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;