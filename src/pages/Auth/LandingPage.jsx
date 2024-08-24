import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

  const navigate = useNavigate();
  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-gray-900 to-transparent">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl"> Hamro Karobar </div>
          <div className="space-x-4">
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              SignUp
            </button>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="bg-blue-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              SignIn
            </button>
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>

      {/* Highlighted Text and Button */}
      <div className="absolute bottom-16 left-0 w-full text-center z-20 px-4 flex flex-col items-center">
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-10 rounded-full shadow-xl hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
