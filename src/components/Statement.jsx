import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useNavigate } from "react-router-dom";

const apiURL = import.meta.env.VITE_API_URL;

function Statement() {
  const [transaction, setTransaction] = useState({});
  const [sender, setSender] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiURL}/transaction/allTransaction/${id}`)
      .then((response) => {
        console.log("From statement: ", response);
        setTransaction(response.data.transaction);
        setSender(response.data.sender);
      })
      .catch((err) => {
        console.log("Statement err: ", err);
      });
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.text("Transaction Statement", 20, 20);

    // Create a table
    const tableColumn = ["Date","From", "To", "Amount"];
    const tableRows = [];

    const transactionData = [
      transaction.date,
      sender.firstname,
      transaction.to,
      transaction.amount,
    ];
    tableRows.push(transactionData);

    // Add table to PDF
    doc.autoTable(tableColumn, tableRows, { startY: 30 });

    // Save the PDF
    doc.save("transaction_statement.pdf");
    navigate("/admin/dashboard");
  };

  console.log("Aaune transaction: ", transaction);

  return (
    <div>
      <h1>Transaction Statement</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generatePDF}
      >
        Download PDF
      </button>
      <div className="mt-4">
        <div className="border p-4 mb-2">
          <p>To: {transaction.to}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>From: {sender.firstname} {sender.lastname}</p>
        </div>
      </div>
    </div>
  );
}

export default Statement;
