import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import InputBox from "./InputBox";
import Button from "./Button";
import Avatar from "./Avatar";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Balance from "./Balance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

const apiURL = import.meta.env.VITE_API_URL;

function SendMoney() {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();

  const notify = (msg)=> toast(msg, {
    position: "top-center",
    autoClose: 1000
  })

  useEffect(() => {
    axios
      .get(`${apiURL}/account/balance`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  return (
    <div className="bg-slate-300 h-screen flex justify-center ">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Send Money"} />
          <br />
          <Avatar name={name} />
          <br />
          <Balance value={balance} />
          <br />
          <InputBox
            onChange={(e) => setAmount(e.target.value)}
            label={"Amount in RS."}
            placeholder={"Enter your Amount"}
          />
          <br />
          <Button
            onClick={() => {
              axios.post(
                `${apiURL}/account/transfer`,
                {
                  to: id,
                  amount: amount,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              ).then((response)=>{
                notify(response.data.message)
                setTimeout(() => {
                  navigate("/admin/dashboard");
                }, 2000);
              }).catch((err)=>{
                console.log(" Error while sending headers: ", err);
                notify(err.response.data.message);
              });
            }}
            label={"Initiate Transfer"}
          />
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
