import axios from "axios";
import Appbar from "../../components/Appbar";
import Balance from "../../components/Balance";
import User from "../../components/User";
import { useState, useEffect } from "react"; 

const apiURL = import.meta.env.VITE_API_URL;

function DashBoard() {

  const [balance, setBalance] = useState();

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
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
      </div>
      <User />
    </div>
  );
}

export default DashBoard;
