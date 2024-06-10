import "./Destination.css";
import React from "react";
import kum1 from "../assets/kum3.jpg";
import kum2 from "../assets/kum2.jpg";
import swat1 from "../assets/swat1.jpg";
import swat2 from "../assets/swat2.jpg";
import pesh1 from "../assets/pesh1.jpg";
import pesh2 from "../assets/pesh2.jpg";

import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Explore the world&apos;s top travel spots, from tropical beaches to
        vibrant cities.
      </p>
      <DestinationData
        className="first-des"
        heading="Kumrat Valley"
        text="Kumrat Valley, located in the Upper Dir District of Khyber Pakhtunkhwa, is a hidden gem known for its untouched natural beauty, dense forests, and crystal-clear rivers. The valley is an ideal destination for nature lovers and adventure seekers, offering activities such as camping, hiking, and trout fishing. The Panjkora River, which runs through the valley, adds to the serene ambiance, while the nearby Jahaz Banda meadows provide breathtaking views and an unforgettable experience. With its tranquil environment and scenic landscapes, Kumrat Valley is a must-visit destination for those looking to escape the hustle and bustle of city life."
        img1={kum1}
        img2={kum2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Swat Valley"
        text="Swat Valley, often referred to as the 'Switzerland of the East,' is a breathtaking region located in the Khyber Pakhtunkhwa province. Known for its stunning landscapes, lush green valleys, and snow-capped mountains, Swat offers a variety of attractions, including the historical Mingora city, the scenic Malam Jabba ski resort, and the tranquil waters of Mahodand Lake. The valley is also rich in cultural heritage, with ancient Buddhist stupas and monasteries scattered throughout the area. Swat Valley's combination of natural beauty and historical significance makes it a top destination for both domestic and international tourists."
        img1={swat1}
        img2={swat2}
      />

      <DestinationData
        className="first-des"
        heading="Peshawar"
        text="Peshawar, the capital of Khyber Pakhtunkhwa province, is one of the oldest cities in South Asia with a history that spans thousands of years. Known for its rich cultural heritage, Peshawar is home to numerous historical sites, including the ancient Bala Hissar Fort, the Mughal-era Mahabat Khan Mosque, and the bustling Qissa Khwani Bazaar, where stories and traditions have been passed down for generations. The city's diverse cuisine, featuring dishes like chapli kebab and peshawari naan, is a delight for food enthusiasts. With its unique blend of ancient history and vibrant modernity, Peshawar offers a fascinating experience for travelers looking to explore the cultural heart of Pakistan."
        img1={pesh1}
        img2={pesh2}
      />
    </div>
  );
};

export default Destination;
