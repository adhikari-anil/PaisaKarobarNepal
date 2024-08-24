import React, { useState } from "react";

const apiURL = import.meta.env.VITE_API_URL;

function OTP() {

    const [otp, setOtp] = useState();

    const handleSubmit = ()=>{
        axios.post(`${apiURL}/user/forgetPassword`,{
            otp: otp 
        }).then(res=>console.log(res)).catch(err=>console.log(err))
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <form className="flex space-x-2" onSubmit={handleSubmit}>
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              onChange={(e)=>setOtp(e.target.value)}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          ))}
        </form>
      </div>
    </div>
  );
}

export default OTP;
