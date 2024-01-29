import React, { useEffect, useState } from 'react'

import fb1 from "../../Images/fblogo.png"
import gb1 from "../../Images/googlelogo.png"
import sh1 from "../../Images/sh1.png"
import  GoArrowLeft  from "../../Images/backArrow.png";
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../Slices/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const [input , setInput] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth._id) {
      navigate("/login");
      toast.success("Register SuccssesFully")
    }
  }, [auth._id, navigate]);

  // Handle Input
  const HandleOnChange =(e)=>{
     const name = e.target.name
     const value = e.target.value

     setInput(Values=>({...Values ,[name]:value}))
  }


// Handle On Submit button
  const HandleSubmit = async ()=>{
    dispatch(registerUser(input));
  }


  return (
    <div className="login-page">
  <div className="login-form">
    <div className="login-header">
      <div className='back-Arrow'><Link  to='/'><img src={GoArrowLeft} alt="" /></Link></div>
      <h1>Sign up Now</h1>
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
    <div>Name</div>
      <div><input type="text" name='name' value={input.name} onChange={HandleOnChange}/></div>
      <div>Email</div>
      <div><input type="text" name='email' value={input.email} onChange={HandleOnChange}/></div>
      <div>Phone No</div>
      <div><input type="text" name='number' value={input.number} onChange={HandleOnChange}/></div>
      <div>Password</div>
      <div><input type="password" name='password' value={input.password} onChange={HandleOnChange}/></div>
    </div>
    <div className="remember-forgot">
      <div><Link className='custom-link' to="/forgetpass">Forget Password?</Link></div>
    </div>
    <div className="login-button">
    <button onClick={HandleSubmit}>
          {auth.rigisterStatus === "pending" ? "Submitting..." : "Register"}
        </button>
        {auth.registerStatus === "rejected" ? (
        <center> <p className='login-signup-error'>{auth.registerError}</p></center> 
        ) : null}
    </div>
   
    <div className="signup-link">
      <div>Already have an Account?</div>
      <div><Link className='custom-link' to="/login">Login</Link></div>
    </div>
  </div>
  <div className="login-image">
    <img src={sh1} alt="" />
  </div>
</div>
  )
}

export default SignUp