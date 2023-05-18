import React from 'react'
import createimg from './lighthouse-animation.gif'
import { Link } from 'react-router-dom'
import  './Createacc.css'
import { Facebook, Google } from 'react-bootstrap-icons'
const Createacc = () => {
  return (
    <div className='create-container'>
      <div className='sec_create_container'>
      <img src={createimg}/>
      </div>
      <div className='thir_create_container'> 
          <br/>
          <h1>Create Account</h1>
          <br/>
          <div className='create_acc'>
          <input type = "text"  placeholder='First Name'/>
          <input type = "text" placeholder='Last Name'/>
          </div>
          <br/>
          <input type='email' className='create_mail' placeholder='Email Address'/>
          <br/><br/>
          <div className='password'>
          <input type='password'  className='create_psw' placeholder='Password'/>
          <input type='password'  className='create_psw' placeholder='Repeat Password'/> 
          </div>
         <br/>
         <Link to='/login'> <button className='reg_btn_1'>Register Account</button></Link>
          <br/><br/>
          <hr className='ss'/> <br/>
         <Link to='/'> <button className='reg_btn_2 '> <Google /> Register with Goggle</button></Link> <br/> <br/>
         <Link to='/'>  <button className='reg_btn_3 '><Facebook/> Register with Facebook</button></Link>
          <br/> <br/>
          <hr className='ss'/> 
          <Link to='/forgot'><span className='acc_link'>Forgot Password?</span> </Link><br/>
          <Link to='/login'><span className='acc_link'>Already have an account? Login!</span> </Link><br/>
      </div>
    </div>
  )
}

export default Createacc