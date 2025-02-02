import React, { useState } from "react";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import BottomWarning from "../../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../assests/Loader";

const apiURL = import.meta.env.VITE_API_URL;

function SignUp() {
  // useState Management..
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // // for Notification or tost
  const notify = (msg) => {
    const id = toast.loading("Please wait...");
    toast.update(id, {
      render: msg,
      type: "success",
      isLoading: false,
      autoClose: 1000,
    });
  };
  //do something else

  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);
    await axios
      .post(`${apiURL}/user/signup`, {
        username: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        if (response.data.message) {
          notify(response.data.message);
          setTimeout(() => {
            navigate("/signin");
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
        notify(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center ">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"SignUp"} />
          <SubHeading label={"Enter Your Info to create account"} />
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            label={"Firstname"}
            type={"text"}
            placeholder={"Firstname"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            label={"Lastname"}
            type={"text"}
            placeholder={"Lastname"}
          />
          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            label={"Email"}
            type={"email"}
            placeholder={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            type={"password"}
            placeholder={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleClick} label={isLoading?<Loader />:"SignUp"} disabled={isLoading}/>
          </div>
          <BottomWarning
            label={"Already have account?"}
            buttonText={"SignIn"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
