import { useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const apiURL = import.meta.env.VITE_API_URL;

// Helper function to get the user ID from the token
const getUserIdFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    return decoded.userId;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const BalanceComponent = () => {
  const [balance, setBalance] = useState(null);
  const [userId, setUserId] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`${apiURL}/user/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setUserId(response.data.userId);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const fetchBalance = async () => {
    try {
      const response = await axios.get(`${apiURL}/account/balance`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const newBalance = response.data.balance;
      setBalance(newBalance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    const id = getUserIdFromToken();
    if (id) {
      setUserId(id);
    } else {
      fetchUserDetails();
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchBalance();

      const eventSource = new EventSource(`${apiURL}/balance-updates`);

      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.userId === userId) {
          setBalance(data.balance);
        }
      };

      eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    }
  }, [userId]);

  if (!userId) {
    return <div>Loading user details...</div>;
  }

  return (
    <div>
      <h1>Current Balance: {balance !== null ? balance : "Loading..."}</h1>
    </div>
  );
};

export default BalanceComponent;