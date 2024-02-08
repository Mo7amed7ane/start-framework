import React from 'react'
import img from '../assets/avataaars.svg'
export default function Block() {
  return (
    <div className='text-center  vh-100' style={{backgroundColor:'#1abc9c'}} >
 <div>
        <img src={img} className='rounded-circle mx-auto d-block ' alt=''/>
       </div>

    </div>
  )
}
