// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignUp from "./pages/Auth/SignUp";
// import SignIn from "./pages/Auth/SignIn";
// import DashBoard from "./pages/Admin/DashBoard";
// import SendMoney from "./components/SendMoney";
// import LandingPage from "./pages/Auth/LandingPage";
// import { ToastContainer } from "react-toastify";
// import axios from "axios";

// function App() {
//   const [user, setUser]= useState([]);

//   useEffect(()=>{
//     axios.get("http://localhost:3000/api/v1/user/me",{
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("token")
//       }
//     }).then((response)=>{
//       console.log("From App bar: ",response);
//       setUser(response.data.user)
//     }).catch((err)=>{
//       console.log("Error while getting sending Header", err);
//     })
//   },[user])
//   console.log(" rendered...");
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={user?<DashBoard user={user}/>:<LandingPage />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/admin/dashboard" element={<DashBoard />} />
//           <Route path="/send" element={<SendMoney />} />
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer />
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import DashBoard from "./pages/Admin/DashBoard";
import SendMoney from "./components/SendMoney";
import LandingPage from "./pages/Auth/LandingPage";
import Transaction from "./components/Transaction";
import { ToastContainer } from "react-toastify";
import Statement from "./components/Statement";
import OTP from "./components/OTP";

function App() {
  
  const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token?<DashBoard />:<LandingPage />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/statement/:id" element={<Statement />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
