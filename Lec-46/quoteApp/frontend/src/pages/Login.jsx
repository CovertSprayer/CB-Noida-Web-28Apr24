import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const login = ({isAuthenticated, handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submitHandler(){
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, {
        email, password
      });

      if(res.status === 200){
        const {id, email, fullName, token} = res.data;
        handleLogin(id, email, fullName, token)
      }
    } catch (error) {
      // console.log(error)
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    if(isAuthenticated){
      navigate("/")
    }
  })

  return (
  <form onSubmit={(e) => {
    e.preventDefault();
    submitHandler();
  }} className="max-w-sm mx-auto">
    <div className="mb-5">
      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input onChange={(e) => {
        setEmail(e.target.value)
      }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
    </div>
    <div className="mb-5">
      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input onChange={(e) => {
        setPassword(e.target.value)
      }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    </div>

    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    <div className='mt-3'>Haven't registed yet? <Link className='text-blue-500 hover:underline' to={"/register"}>Register</Link>
    </div>
  </form>
  )
}

export default login