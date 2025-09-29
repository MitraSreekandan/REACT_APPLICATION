import React, { lazy, Suspense } from 'react'
import {BrowserRouter,  Link,  NavLink,  Route, Routes } from "react-router-dom"
// import Home from './Home'
// import Login from '../Application/Login'
// import Register from './Register'
const Home=lazy(()=>import("./Home"))
const Login=lazy(()=>import("./Login"))
const Register=lazy(()=>import("./Register"))
const Manage = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
    <nav>
        <Link to="/login">Login</Link> 
        {/*<Link to="/register">Register</Link> */}
        <NavLink to="/">Home</NavLink>
    </nav>
    <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/login'element={<Login/>} />
         <Route path='/register'element={<Register/>} />
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default Manage
