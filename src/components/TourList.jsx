import React, { useState } from "react";
import TourCard from "./TourCard";
import "./TourList.css";

import Trip1 from "../assets/kum3.jpg";
import Trip2 from "../assets/swat1.jpg";
import Trip3 from "../assets/pesh1.jpg";
import Trip4 from "../assets/image3.jpg";
import Trip5 from "../assets/image5.jpg";
import Trip6 from "../assets/image4.jpg";
import Trip7 from "../assets/image20.jpg";
import Trip8 from "../assets/image7.jpg";
import Trip9 from "../assets/image8.jpg";
import Trip10 from "../assets/image1.jpg";
import Trip11 from "../assets/image2.jpg";
import Trip12 from "../assets/image10.jpg";
import Trip13 from "../assets/image11.jpg";
import Trip14 from "../assets/image19.jpg";
import Trip15 from "../assets/image12.jpg";
import Trip16 from "../assets/image18.jpeg";
import Trip17 from "../assets/image13.jpg";
import Trip18 from "../assets/image14.jpg";
import Trip19 from "../assets/image15.jpg";
import Trip20 from "../assets/image16.jpg";
import Trip21 from "../assets/image17.jpg";

const initialTours = [
  {
    destination: "Swat Valley",
    date: "2024-07-15",
    price: 300,
    imageUrl: Trip2,
  },
  {
    destination: "Kumrat Valley",
    date: "2024-08-10",
    price: 350,
    imageUrl: Trip1,
  },
  {
    destination: "Peshawar",
    date: "2024-09-05",
    price: 250,
    imageUrl: Trip3,
  },
  {
    destination: "Lahore",
    date: "2024-11-12",
    price: 320,
    imageUrl: Trip4,
  },
  {
    destination: "Islamabad",
    date: "2024-10-20",
    price: 280,
    imageUrl: Trip5,
  },
  {
    destination: "Karachi",
    date: "2024-12-08",
    price: 270,
    imageUrl: Trip6,
  },
  {
    destination: "Murree",
    date: "2025-01-15",
    price: 290,
    imageUrl: Trip7,
  },
  {
    destination: "Gilgit",
    date: "2025-02-20",
    price: 380,
    imageUrl: Trip8,
  },
  {
    destination: "Skardu",
    date: "2025-03-10",
    price: 400,
    imageUrl: Trip9,
  },
  {
    destination: "Faisalabad",
    date: "2025-04-05",
    price: 260,
    imageUrl: Trip10,
  },
  {
    destination: "Quetta",
    date: "2025-05-20",
    price: 310,
    imageUrl: Trip11,
  },
  {
    destination: "Jazz Banda",
    date: "2025-12-15",
    price: 270,
    imageUrl: Trip12,
  },
  {
    destination: "Usho Forest",
    date: "2026-01-20",
    price: 290,
    imageUrl: Trip13,
  },
  {
    destination: 'Mardan',
    date: '2026-02-10',
    price: 260,
    imageUrl: Trip14,
  },
  {
    destination: 'Chitral',
    date: '2026-03-05',
    price: 330,
    imageUrl: Trip15,
  },
  {
    destination: 'Khunjarab Pass',
    date: '2026-03-15',
    price: 430,
    imageUrl: Trip16,
  },
  {
    destination: 'Khaltoro Valley',
    date: '2026-03-25',
    price: 400,
    imageUrl: Trip17,
  },
  {
    destination: 'Babusar Top',
    date: '2026-03-28',
    price: 380,
    imageUrl: Trip18,
  },
  {
    destination: 'Malam Jaba',
    date: '2026-03-30',
    price: 300,
    imageUrl: Trip19,
  },
  {
    destination: 'Para Chinnar',
    date: '2026-04-05',
    price: 730,
    imageUrl: Trip20,
  },
  {
    destination: 'Seri Pay',
    date: '2026-03-15',
    price: 330,
    imageUrl: Trip21,
  },
];

const TourList = () => {
  const [showMore, setShowMore] = useState(false);
  const tours = showMore ? initialTours : initialTours.slice(0, 6);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <h1 className="tour-head">Book Your Dream Tour</h1>
      <p className="tour-para">Discover unique and breathtaking destinations with ease using Google Maps</p>
      <div className="tour-list">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            destination={tour.destination}
            date={tour.date}
            price={tour.price}
            imageUrl={tour.imageUrl}
          />
        ))}
      </div>
      {!showMore && (
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default TourList;
