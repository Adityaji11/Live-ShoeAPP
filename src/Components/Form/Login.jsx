import React, { useEffect, useState } from 'react'

import fb1 from "../../Images/fblogo.png"
import gb1 from "../../Images/googlelogo.png"
import sh2 from "../../Images/sh2.jpg"
import  GoArrowLeft  from "../../Images/backArrow.png";

import '../Form/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Slices/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {

  const [input , setInput] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const HandleOnChange = (e)=>{
      let name = e.target.name;
      let value = e.target.value;

      setInput(Values=>({...Values , [name]:value}))
  }

  useEffect(() => {
    if (auth._id) {

      if (auth.loginStatus ==="success" && auth.isAdmin === true) {
        toast.success("Login succsessfully")

        navigate("/admin");
      }
      if (auth.loginStatus ==="success" && auth.isAdmin === false) {
        toast.success("Login succsessfully")
        navigate("/");
      }
    }
  }, [auth._id, navigate ,auth.isAdmin ,auth.loginStatus ,auth.name]);

  const HandleSubmit = async ()=>{

    // console.log(input);
    dispatch(loginUser(input));
  }
   
  return (
    <>
<div className="login-page">
  <div className="login-form">
    <div className="login-header">
      <div className='back-Arrow'><Link  to='/'><img src={GoArrowLeft} alt="" /></Link></div>
      <h1>Login Now</h1>
      <h5>Please Login to enter the app</h5>
    </div>
    <div className="login-instantly">
      <h5>Login Instantly</h5>
      <div>
        <div><img src={gb1} alt='' /></div>
        <div><img src={fb1} alt='' /></div>
      </div>
    </div>
    <div className="input-fields">
      <div>Email</div>
      <div><input type="text" name='email'  value={input.email} onChange={HandleOnChange}/></div>
      <div>Password</div>
      <div><input type="password" name='password' value={input.password} onChange={HandleOnChange}/></div>
    </div>
    <div className="remember-forgot">
      <div><Link className='custom-link' to="/forgetpass">Forget Password?</Link></div>
    </div>
    <div className="login-button">
    <button onClick={HandleSubmit}>
          {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
        </button>
        {auth.loginStatus === "rejected" ? <center><p className='login-signup-error'>{auth.loginError}</p></center> : null}
    </div>
    <div className="signup-link">
      <div>Don't have an Account?</div>
      <div><Link className='custom-link' to="/signup">Sign Up</Link></div>
    </div>
  </div>
  <div className="login-image">
    <img src={sh2} alt="" />
  </div>
</div>
    </>
  )
}

export default Login