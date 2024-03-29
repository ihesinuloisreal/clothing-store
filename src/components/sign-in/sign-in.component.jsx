import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/custom-button.component';
import { auth, signInWithGoogle  } from '../../firebase/firebase.utils';
import {signInWithEmailAndPassword } from "firebase/auth";


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state
    
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({
                email: '',
                password:''
            })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]: value})

    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span >Sing in with your email and password</span>

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
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
