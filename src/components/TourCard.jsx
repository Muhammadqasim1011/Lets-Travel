import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import PaymentModal from './PaymentModal';
import './TourCard.css';

const TourCard = ({ destination, date, price, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePayment = () => {
    alert('Payment successful!');
    setIsModalOpen(false);
  };

  return (
    <div className="tour-card">
      <img src={imageUrl} alt={destination} className="tour-image" />
      <div className="tour-details">
        <h2 className="tour-destination">{destination}</h2>
        <p className="tour-date">Date: {date}</p>
        <p className="tour-price">Price: ${price}</p>
        <button className="book-btn" onClick={handleBookClick}>
          Proceed to Payment
        </button>
      </div>
      <PaymentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onPayment={handlePayment}
      />
    </div>
  );
};

// Prop types validation
TourCard.propTypes = {
  destination: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default TourCard;
