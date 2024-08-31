import React, { useCallback, useEffect, useState } from "react";
import Users from "./Users";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

function User() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`${apiURL}/user/otherUser?filter=${filter}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
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
      <div>
        {users.map((user, index) => (
          <Users key={index} users={user} />
        ))}
      </div>
    </>
  );
}

export default User;
