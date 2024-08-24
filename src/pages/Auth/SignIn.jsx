import React, { useState } from "react";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
//import BottomWarning from "../../components/BottomWarning"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OTP from "../../components/OTP";

const apiURL = import.meta.env.VITE_API_URL;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isClicked, setClicked] = useState(false);
  const navigate = useNavigate();

  //For notification....

  const notify = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 1000,
    });

  return (
    <div className="bg-slate-300 h-screen flex justify-center ">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"SignIn"} />
          <SubHeading label={"Enter Your Info to login your account"} />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label={"Email"}
            type={"email"}
            placeholder={"123@gmail.com"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            type={"password"}
            placeholder={"*******"}
          />
          <div className="pt-4">
            <Button
              label={"SignIn"}
              onClick={() => {
                axios
                  .post(`${apiURL}/user/signin`, {
                    username: email,
                    password: password,
                  })
                  .then((response) => {
                    console.log(response.data.message);
                    notify(response.data.message);
                    navigate("/admin/dashboard");
                  })
                  .catch((err) => {
                    console.log("Error in SignIn button : ", err);
                  });
              }}
            />
          </div>
          <Link to={"/otp"}>
            <Button
              label={"Forgetted Password ? "}
              onClick={() => {
                axios.post(`${apiURL}/user/forgetPassword`,{
                  username: email
                }).then(res=>console.log(res.message)).catch(err=>console.log(err))
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
