import React from 'react'

export default function Footer() {
  return (
    <div className='mt-5 py-5 d-flex justify-content-around text-white' style={{ backgroundColor : '#2c3e50'} }> 
    
    <div className="container">
      <div className="row ">
        <div className="col-md-4">
        <div className='d-flex flex-column text-center '>
     <h3>LOCATION</h3>
     <p>2215 John Daniel Drive</p>
     <p>Clark, MO 65243</p>
     </div>
        </div>
        <div className="col-md-4">
        <div className='d-flex align-items-center justify-content-center'>
        <h2>AROUND THE WEB</h2>
        <span className='fa-brands fa-facebook bg-danger'></span>
     </div>
        </div>

        <div className="col-md-4">
        <div className='d-flex flex-column text-center '>
    <h2>ABOUT FREELANCER</h2>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
   </div>
        </div>
      </div>
    </div>


    </div>
  )
}
