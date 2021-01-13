import React from 'react';
import './Login.css'
import avatar from '../../assets/my-avatar.png'
import Input from '../common/input/Input'
import Button from '../common/button/Button'

const Login = () => {
    return (
        <div className="login-main-container" role="main">
            <div className="login-image-container">
                <img src={avatar} alt="My Avatar" className="login-image-avatar"/>
            </div>
            <div className="login-form-container">
                <Input label="Username" placeholder="Enter Username"/>
                <Input label="Password" placeholder="Enter Password"/>
                <Button className="login-button" label="Login" onClick={() => console.log('Login button clicked!')}/>
                <Input type="checkbox"/>
            </div>
            <div>
            <Button className="cancel-button" label="Cancel" onClick={() => console.log('Cancel button clicked!')}/>
            <span>Forgot <a href="#">password?</a></span>
            </div>
        </div>
    )
}

export default Login