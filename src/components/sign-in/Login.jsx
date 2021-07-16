import React,{useState} from 'react';

import './Login.scss';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
const SignIn = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { email, password } = form;


    const handleSubmit = event => {
        event.preventDefault();
        setForm({email: '', password: ''});
    };


    const handleChange = event => {
        const {value, name} = event.target;
        setForm({[name]: value});
    };
    return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton  type='submit'>Sign In</CustomButton>
                        {/*<CustomButton onClick={signInWithGoogle} isGoogleSignIn>*/}
                        {/*    Sign in with Google*/}
                        {/*</CustomButton>*/}
                    </div>
                </form>
            </div>
        )
}

export default SignIn;