import React, { Component } from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

import './session.scss'

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try{
           await auth.signInWithEmailAndPassword(email, password);
           this.setState({ email: '', password: ''})

        } catch(error) {
            console.error(error);
        }
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }
    render(){
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={ signInWithGoogle } isGoogleSignIn> SIGN IN with GOOGLE </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;