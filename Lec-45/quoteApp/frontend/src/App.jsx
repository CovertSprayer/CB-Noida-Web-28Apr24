import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
  const [isAuthenticated, setIsAuthencticated] = useState("");
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthencticated(localStorage.getItem('token'));
  }, [isAuthenticated])

  function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthencticated(false);
    navigate("/login");
  }

  function handleLogin(id, email, fullName, token){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({id, email, fullName}));
    setIsAuthencticated(true);
    navigate("/");
  }

  return (
    <div className='min-h-screen max-h-screen dark:bg-slate-800'>
      <Navbar isAuthenticated={isAuthenticated} logout={logout}/>

      <div className='dark:bg-slate-800 max-w-[600px] mx-auto'>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/login"} element={<Login isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>}/>
          <Route path={"/register"} element={<Register/>} />
          {/* <Route path={"/quotes/:id"} element={<Show/>} /> */}
        </Routes>
      </div>

      {/* Footer */}
    
    </div>
  )
}

export default App