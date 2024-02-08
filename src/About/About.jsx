import React from 'react'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'



export default function About() {
  return (
    <div className='text-center'>
      <div className="container">
       
          <h1 className='fw-bolder text-uppercase pt-lg-5'>portfolio component</h1>
    <div className="row mt-4">
      <div className="col-md-4">
        <div className="item w-100 position-relative">
          <img className='w-100 img-fluid rounded-2' src={img1} alt="" />
          <div className='overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center rounded-2'>  
          <span className='text-white fs-1'>+</span>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="item w-100 position-relative">
          <img className='w-100 img-fluid rounded-2' src={img2} alt="" />
          <div className='overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center rounded-2'>  
          <span className='text-white fs-1'>+</span>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="item w-100 position-relative">
          <img className='w-100 img-fluid rounded-2' src={img3} alt="" />
          <div className='overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center rounded-2'>  
          <span className='text-white fs-1'>+</span>
          </div>
        </div>
      </div>


    </div>


    <div className="row mt-4">
      <div className="col-md-4">
        <div className="item w-100 position-relative" >
          <img className='w-100 img-fluid rounded-2' src={img3} alt="" />
          <div className='overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center rounded-2'>  
          <span className='text-white fs-1'>+</span>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="item w-100 position-relative">
          <img className='w-100 img-fluid rounded-2' src={img2} alt="" />
          <div className='overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center rounded-2'>  
          <span className='text-white fs-1'>+</span>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="item w-100 position-relative">
          <img className='w-100 img-fluid rounded-2' src={img1} alt="" />
          <div className='overlay position-absolute top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center rounded-2'>  
          <span className='text-white fs-1'>+</span>
          </div>
        </div>
      </div>


    </div>




</div>

        </div>
    
    




     



   
  )
}
