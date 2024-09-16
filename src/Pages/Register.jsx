import React from 'react'
import { useRef } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase/firsebase"
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const email = useRef();
  const password = useRef();
   const navigate = useNavigate();
  const registerUser = (event) => {
    event.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    email.current.value = ''
    password.current.value = ''
  }
  return (
    <>
      <div className='flex items-center justify-center h-[100vh] bg-gray-100'>
        <div className='text-center'>
          <h1 className='mt-5 text-3xl'>Register</h1>
          <form onSubmit={registerUser}>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="mt-5 input input-bordered w-[20rem]"
              ref={email}
            />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="mt-5 input input-bordered w-[20rem]"
              ref={password}
            />
            <br />
            <button className="btn btn-info mt-5">Register</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register