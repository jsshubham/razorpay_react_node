import React from "react";
import TshirtImg from "./tshirt.svg";

function Product() {
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
    // Make the fetch request to your server endpoint
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const order = await response.json();
      console.log(order);

      // Razorpay options and handler code...
    } catch (error) {
      console.error("Payment failed:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="product">
      <h2>Tshirt</h2>
      <p>Solid blue cotton Tshirt</p>
      <img src={TshirtImg} alt="Tshirt" />
      <br />
      <button onClick={paymentHandler}>Pay</button>
    </div>
  );
}

export default Product;
