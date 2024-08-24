import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between border">
      <div className="flex flex-col justify-center h-full ml-4">
        Karobaar Dashboard
      </div>
      <div className="flex">
        <Link
          className="flex flex-col justify-center h-full mr-4"
          to={"/transaction"}
        >
          Transactions
        </Link>

        <div className="flex flex-col justify-center h-full mr-4">
          You
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
           u
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
