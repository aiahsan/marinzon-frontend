import React from 'react';
import Heading from '../headings/Heading';
export default ()=>{
    return <div className="mt-5 mb-5">
    <Heading
      center
      title={"Sign up and be the first to hear about new to market yachts and exclusive opportunities."}
      subtitle={"LET’S STAY IN TOUCH "}
    />
    <div className="jmdsa-casmier kmcmsd-emk4e ">
      <div className='d-flex align-items-center'>
      <div className='mt-3 mx-4'>
        <p className="m-0 ">Name :</p>
        <input className="form-control" placeholder="Inquiry Name" />
      </div>
     
      <div className="mt-3">
        <p className="m-0 ">Email Address :</p>
        <input
          className="form-control"
          placeholder="Your Email Address"
        />
      </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary w-100">Send Us</button>
      </div>
    </div>
  </div>
}