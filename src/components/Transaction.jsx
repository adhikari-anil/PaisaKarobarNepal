import axios from "axios";
import React, { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import Appbar from "./Appbar";

const apiURL = import.meta.env.VITE_API_URL;

function Transaction() {
  const [transaction, setTransaction] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        `${apiURL}/transaction/allTransaction?filter=${filter}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        setTransaction(response.data.transaction);
      })
      .catch((err) => {
        console.log("Err in allTransaction call: ", err);
      });
  }, [filter]);

  return (
    <>
      <Appbar />
      <div className="font-bold mt-6 text-lg">Your Transactions...</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search Users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {transaction.map((transaction, index) => (
          <TransactionList key={index} transactions={transaction} />
        ))}
      </div>
    </>
  );
}

export default Transaction;
