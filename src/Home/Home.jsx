import React from 'react'
import img from '../assets/mohamed.jpg'
export default function Home() {
  return (
    <div className='text-center  vh-100' style={{backgroundColor:'#1abc9c'}} >
       <div>
        <img src={img} className='rounded-circle mx-auto d-block ' alt=''/>
       </div>

   <div className='Home d-flex flex-column align-items-center'>
    
<div className='Home-header'>
 <h2 className='text-uppercase fw-bolder pt-5 fs-1 mb-3'>home component </h2>
</div>
  <hr />
   <div className='container '>
 <div className="row px-5">
   <div className="col-md-6 ps-md-5">
  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
   </div>
  <div className="col-md-6 pe-5">
  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  </div>

 </div>
   </div>

   </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}
