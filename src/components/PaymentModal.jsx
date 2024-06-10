// PaymentModal.jsx

import React from 'react';
import './PaymentModal.css';

const PaymentModal = ({ isOpen, onClose, onPayment }) => {
  if (!isOpen) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    onPayment();
  };

  return (
    <div className="payment-modal" onClick={onClose}>
      <div className="payment-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Payment</h2>
        <form onSubmit={handlePayment}>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            required
          />
          <input
            type="text"
            name="cardHolder"
            placeholder="Card Holder Name"
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            required
          />
          <button type="submit" className="pay-btn">Pay Now</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentModal;
