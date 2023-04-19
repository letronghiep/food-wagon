import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { auth, createAuthWithEmailAndPassword, createUserDocumentFromAuth, getUserDocumentFromAuth, signInAuthWithEmailAndPassword } from '../utils/firebase/firebase'
import { useDispatch } from 'react-redux'
import { login, setCurrentUser } from '../store/user/userSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'

function LoginForm() {
  const defaultFormField = {
    email: '',
    password: ''
  }
  const navigate = useNavigate()
  const [formField, setFormField] = useState(defaultFormField);
  const [formErrors, setFormErrors] = useState(defaultFormField);
  const { email, password } = formField;
  const handleSubmitForm = async (e) => {
    e.preventDefault();
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

    if (!email && !password) {
      setFormErrors({ email: "Please enter a email", password: "Please enter a password" });
    }

    if (email && password) {
      try {
        const { user } = await signInAuthWithEmailAndPassword(email, password);
        console.log(user);
        await createUserDocumentFromAuth(user);
        navigate('/')
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("Email or password not found")
            break;
          case 'auth/wrong-password':
            alert("Password is incorrect")
            break;
          default:
            break;
        }
        console.log(error);
      }
    }

    console.log(formErrors)

  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (email.startsWith(' ') || password.startsWith(' ')) return
    let errors = { ...formErrors };
    switch (name) {
      case 'email':
        errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "The email is not valid"
        break;
      case 'password':
        errors.password = value.length < 6 ? 'Password must be at least 6 characters long!' : "";
        break;
      default:
        break;
    }
    setFormErrors(errors);
    setFormField({ ...formField, [name]: value })
  }
  const validateForm = () => {
    let valid = true;
    Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  return (
    <div className="bg-slate-50 rounded-2xl px-12 py-12 shadow-md">
      <h2 className="text-center uppercase my-5 text-3xl font-bold text-orange-600">
        Login
      </h2>
      <form className="" onSubmit={handleSubmitForm}>
        <div className="flex flex-col  w-[400px]">
          <FormInput type='email' placeholder="email" label="email" name="email" value={email} onChange={handleOnChange} />
          {formErrors.email && <span className="text-red-600">{formErrors.email}</span>}
          <FormInput type='password' placeholder="password" label="password" name='password' value={password} onChange={handleOnChange} />
          {formErrors.password && <span className="text-red-600">{formErrors.password}</span>}

        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <input
              className="mr-3 cursor-pointer"
              id="remember"
              type="checkbox"
            />
            <label htmlFor="remember" className="cursor-pointer">
              Remember me
            </label>
          </div>
          <Link
            to="reset"
            className="underline text-orange-500"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          className="bg-orange-500 my-7 text-white font-bold text-xl p-2 w-full uppercase rounded-lg hover:opacity-90 outline-none border-none disabled:opacity-50"
          type="submit" disabled={!validateForm()}
        >
          Login
        </button>
        <p className="text-center">
          You haven't account?{" "}
          <Link className="text-orange-500 underline" to="register">
            Register now
          </Link>{" "}
        </p>
      </form>
    </div>
  )
}

export default LoginForm
