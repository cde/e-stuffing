import React, { Component } from 'react';
import './SingIn.scss'

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <input type='email' onChange={this.handleChange} value={this.state.email} placeholder='Email'  required />
                    <input type='password' onChange={this.handleChange} value={this.state.password} placeholder='Passpord' required />
                    <button>SIGN IN</button>
                    <button>SIGN IN with GOOGLE</button>
                </form>

            </div>
        )
    }
}

export default SignIn;