import React from 'react'

export default function Skills(props) {

  return (
    <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-3'> 
    <div className="row m-1 setBorder p-1 ">
    <div className='col-xxl-4 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-4'>
        <img src={props.src} width={25} height={25} alt={props.name}/>
    </div>
    <div className='col-xxl-8 col-xl-9 col-lg-9 col-md-9 col-sm-6 col-8 text-start text text-white'>
        {props.name}
    </div>
    </div>  
    </div>
  )
}
