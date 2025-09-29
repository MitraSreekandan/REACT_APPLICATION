import React, { useState } from "react";

const Amountapp = () => {
  const [amount, setAmount] = useState("");         // For input field
  const [amounts, setAmounts] = useState([]);       // For storing all added amounts


  const handleAdd = () => {
    if (amount !== "") {
      setAmounts([...amounts, Number(amount)]);     // Convert input to number and add to array
      setAmount("");                                // Clear input field
    }
  };

  
  const handleDelete = (indexToDelete) => {
    const updatedAmounts = amounts.filter((value, index) => index !== indexToDelete);
    setAmounts(updatedAmounts);
  };

 
  const totalAmount = amounts.reduce((start, current) => start + current, 0);

  return (
    <div>
      <h1>Amount Calculation</h1>

      <input
        type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <h2>Amounts:</h2>
      <ul>
        {amounts.map((value, index) => (
          <li key={index}>
            {value}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Total Amount: {totalAmount}</h2>
    </div>
  );
};

export default Amountapp;