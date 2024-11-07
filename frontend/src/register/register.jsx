import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); 

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const userData = {
            username,
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:3006/register', userData);

            alert(`Registration successful for: ${username}`);
            navigate('/login');

        } catch (err) {
            if (err.response) {
                alert(err.response.data.error || 'Registration failed');
            } else {
                alert('An error occurred, please try again later');
            }
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit">Register</button>
                    <span>Already have an account? </span>
                    <a href="#" onClick={handleLogin}>Login</a>
                </form>
            </div>
        </div>
    );
};

export default Register;