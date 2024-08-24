import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function TransactionList({ transactions }) {
  console.log("From TransactionList: ", transactions);

  // Convert createdAt to a Date object and extract the time portion
  const transactionTime = new Date(transactions.createdAt).toLocaleTimeString();

  return (
    <>
      <div classNameName="max-w-sm mx-auto mt-3">
        <div className=" flex flex-col w-80 justify-between gap-4 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6">
          <div className="flex flex-row">
            <h2 className="text-lg font-mono">To: </h2>
            <Link
              classNameName="flex flex-col justify-center h-full w-full mr-4"
              to={`/statement/${transactions._id}`}
            >
              {transactions.to}
            </Link>
          </div>
          <h2 className="text-base font-medium text-red-600">Time: {transactionTime}</h2>
        </div>
      </div>
    </>
  );
}

export default TransactionList;
