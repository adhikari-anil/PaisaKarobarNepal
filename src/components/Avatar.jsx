import React from "react";

function Avatar({name}) {
  return (
    <div className="flex">
      <div className="rounded-full h-12 w-12 bg-green-600 flex justify-center mt-1 mr-4 ml-2">
        <div className="flex flex-col justify-center h-full text-xl">{name[0].toUpperCase()}</div>
      </div>
      <div className="flex flex-col justify-center h-ful font-bold">
        <div>{name}</div>
      </div>
    </div>
  );
}

export default Avatar;
