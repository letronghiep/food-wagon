import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { createAuthUser, createAuthWithEmailAndPassword } from '../utils/firebase/firebase'

function RegisterForm() {
    const defaultFormField = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const navigate = useNavigate()
    const [formField, setFormField] = useState(defaultFormField);
    const [formErrors, setFormErrors] = useState(defaultFormField);
    const { username, email, password, confirmPassword } = formField;
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!username) {
            setFormErrors(prevState => ({ ...prevState, username: "Please enter a username" }))
        } else {
            setFormErrors(prevState => ({ ...prevState, username: "" }))
        }
        if (!email) {
            setFormErrors(prevState => ({ ...prevState, email: "Please enter a email" }));
        } else {
            setFormErrors(prevState => ({ ...prevState, email: '' }));
        }

        if (!password) {
            setFormErrors(prevState => ({ ...prevState, password: 'Please enter a password' }));
        } else {
            setFormErrors(prevState => ({ ...prevState, password: '' }));
        }

        if (!confirmPassword) {
            setFormErrors(prevState => ({ ...prevState, confirmPassword: 'Please enter a confirm password' }));
        } else {
            setFormErrors(prevState => ({ ...prevState, confirmPassword: '' }));
        }
        if (!username && !email && !password && !confirmPassword) {
            setFormErrors({ username: "Please enter a username", email: "Please enter a email", password: "Please enter a password", confirmPassword: "Please enter your confirm password" });
        }

        if (username && email && password && confirmPassword) {
            try {
                await createAuthWithEmailAndPassword(email, password)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }

    }

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        let errors = { ...formErrors }
        switch (name) {
            case 'username':
                errors.username = /^\d/.test(value) ? "Username is invalid" : ""
                break;
            case 'email':
                errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "The email is not valid"
                break;
            case 'password':
                errors.password = value.length < 6 ? 'Password must be at least 8 characters long!' : "";
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== password ? "Password not matched" : "";
                break;
            default:
                break;
        }
        setFormErrors(errors);
        setFormField({ ...formField, [name]: value })
        // setFormErrors('')
    }
    const validateForm = () => {
        let valid = true;
        Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));
        return valid;
    };
    return (
        <div className="bg-slate-50 rounded-2xl px-12 py-12 shadow-md">
            <h2 className="text-center uppercase my-5 text-3xl font-bold text-orange-600">
                Register
            </h2>
            <form className="" onSubmit={handleSubmitForm}>
                <div className="flex flex-col w-[400px]">
                    <FormInput type='text' placeholder="username" label="username" name="username" value={username} onChange={handleOnChange} />
                    {formErrors.username && <span className="text-red-600">{formErrors.username}</span>}
                    <FormInput type='text' placeholder="email" label="email" name="email" value={email} onChange={handleOnChange} />
                    {formErrors.email && <span className="text-red-600">{formErrors.email}</span>}

                    <FormInput type='password' placeholder="password" label="password" name="password" value={password} onChange={handleOnChange} />
                    {formErrors.password && <span className="text-red-600">{formErrors.password}</span>}

                    <FormInput type='password' placeholder="Confirm Password" label="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} />
                    {formErrors.confirmPassword && <span className="text-red-600">{formErrors.confirmPassword}</span>}


                </div>

                <button
                    className="bg-orange-500 my-7 text-white font-bold text-xl p-2 w-full uppercase rounded-lg hover:opacity-90 outline-none border-none disabled:opacity-50"
                    type="submit"
                    disabled={!validateForm()}
                >
                    Register
                </button>
                <p className="text-center">
                    You have account? <Link className="text-orange-500 underline" to="/auth"> Login</Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm
