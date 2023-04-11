import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'

function LoginForm() {
  const defaultFormField = {
    username: '',
    password: ''
  }

  const navigate = useNavigate()
  const [formField, setFormField] = useState(defaultFormField);
  const [formErrors, setFormErrors] = useState(defaultFormField);
  const { username, password } = formField;
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!username) {
      setFormErrors(prevState => ({ ...prevState, username: "Please enter a username" }));
    } else {
      setFormErrors(prevState => ({ ...prevState, username: '' }));
    }

    if (!password) {
      setFormErrors(prevState => ({ ...prevState, password: 'Please enter a password' }));
    } else {
      setFormErrors(prevState => ({ ...prevState, password: '' }));
    }

    if (!username && !password) {
      setFormErrors({ username: "Please enter a username", password: "Please enter a password" });
    }

    if (username && password) {
      navigate('/')
    }
    console.log(formErrors)

  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (username.startsWith(' ') || password.startsWith(' ')) return
    let errors = { ...formErrors };
    switch (name) {
      case 'username':
        errors.username = /^[0-9]/.test(username) ? "First Character username must be a letter" : "";

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
  // const validateFormField = () => {
  //   let valid = false;
  //   Object.keys(formField).map((key) => formField[key].length > 0 ? (valid = true) : valid = false);
  //   return valid;
  // }
  return (
    <div className="bg-slate-50 rounded-2xl px-12 py-12 shadow-md">
      <h2 className="text-center uppercase my-5 text-3xl font-bold text-orange-600">
        Login
      </h2>
      <form className="" onSubmit={handleSubmitForm}>
        <div className="flex flex-col  w-[400px]">
          <FormInput type='text' placeholder="username" label="username" name="username" value={username} onChange={handleOnChange} />
          {formErrors.username && <span className="text-red-600">{formErrors.username}</span>}
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
