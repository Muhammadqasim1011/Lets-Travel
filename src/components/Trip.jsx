import React from "react";
import "./Trip.css";
import TripData from "./TripData";

import Trip1 from "../assets/kum3.jpg";
import Trip2 from "../assets/swat1.jpg";
import Trip3 from "../assets/pesh1.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Kumrat Valley"
          text="Kumrat Valley, located in the Upper Dir District of Khyber Pakhtunkhwa, is a hidden gem known for its untouched natural beauty, dense forests, and crystal-clear rivers. The valley is an ideal destination for nature lovers and adventure seekers, offering activities such as camping, hiking, and trout fishing."
        />
        <TripData
          image={Trip2}
          heading="Trip to Swat Valley"
          text="Swat Valley, often referred to as the 'Switzerland of the East,' is a breathtaking region located in the Khyber Pakhtunkhwa province. Known for its stunning landscapes, lush green valleys, and snow-capped mountains, Swat offers a variety of attractions, including the historical Mingora city, the scenic Malam Jabba ski resort, and the tranquil waters of Mahodand Lake."
        />
        <TripData
          image={Trip3}
          heading="Trip to Peshawer"
          text="Peshawar, the capital of Khyber Pakhtunkhwa province, is one of the oldest cities in South Asia with a history that spans thousands of years. Known for its rich cultural heritage, Peshawar is home to numerous historical sites, including the ancient Bala Hissar Fort, the Mughal-era Mahabat Khan Mosque, and the bustling Qissa Khwani Bazaar."
        />
      </div>
    </div>
  );
}

export default Trip;
