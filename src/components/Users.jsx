import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Users({users}) {
  // const [fistname, setFirstName]= useState("");
  // const [lastname, setLastName]= useState("");
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border rounded-md mb-5">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-4 ml-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {users.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>{users.firstname} {users.lastname}</div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button onClick={()=>{
          navigate("/send?id=" + users.username + "&name=" + users.firstname)
        }} label={"Send Money"}/>
      </div>
    </div>
  );
}

export default Users;
