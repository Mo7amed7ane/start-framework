import React from 'react'
import Home from './../Home/Home';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='  vh-100' style={{backgroundColor:'#1abc9c'}} >
        <h1 className='text-uppercase text-center fw-bolder pt-5'>  Contact section</h1>
        <hr />

  <div className='container'>
     

<form>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">userName</label>
    <input type="text" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">userAge</label>
    <input type="date" className="form-control" id="exampleInputPassword1" />
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 <NavLink to="/home"> <button type="submit"  className="btn btn-primary">Send Message</button></NavLink>
</form>

     
      </div>

    </div>
  )
}
