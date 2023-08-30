// src/Form.tsx
import React, { useState } from 'react';

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateForm = () => {
        let valid = true;

        if (!name) {
            setNameError('Name is required');
            valid = false;
        } else {
            setNameError('');
        }

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email format');
            valid = false;
        } else {
            setEmailError('');
        }

        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            alert('Form submitted successfully');
        }
        setEmail("");
        setName("");
    };

    return (
        <>
            <h2>LogIn Form!</h2>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <div className="error">{nameError}</div>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="error">{emailError}</div>}
                    </div>
                    <button className='submitBtn' type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Form;
