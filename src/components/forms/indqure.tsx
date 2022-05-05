import React from 'react';
import Heading from '../headings/Heading';
export default ()=>{
    return <div className="mt-5">
    <Heading
      center
      title={"Our team of specialists are here to help."}
      subtitle={"ENQUIRE"}
    />
    <div className="jmdsa-casmier kmcmsd-emk4e">
      <div>
        <p className="m-0 ">Name :</p>
        <input className="form-control" placeholder="Inquiry Name" />
      </div>
      <div>
        <p className="m-0 mt-3">Phone Number :</p>
        <input className="form-control" placeholder="Your Phone Number" />
      </div>
      <div className="mt-3">
        <p className="m-0 ">Email Address :</p>
        <input
          className="form-control"
          placeholder="Your Email Address"
        />
      </div>
      <div className="mt-3">
        <button className="btn btn-primary w-100">Send Us</button>
      </div>
    </div>
  </div>
}