import React, { Component } from 'react';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import './session.scss';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, passwordConfirmation } = this.state;

        if (password !== passwordConfirmation) {
            alert('Password do not match');
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState( {
                               displayName: '',
                               email: '',
                               password: '',
                               passwordConfirmation: ''
                           })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render(){
        const { displayName, email, password, passwordConfirmation } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span> Sign up with your email and password </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={ displayName }
                        label='Display Name'
                        required
                    />

                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={ email }
                        label='Email'
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={ password }
                        label='Password'
                        required
                    />

                    <FormInput
                        name='passwordConfirmation'
                        type='password'
                        handleChange={this.handleChange}
                        value={ passwordConfirmation}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
};

export default SignUp;