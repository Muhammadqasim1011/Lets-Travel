# Lets Travel

## Overview

This project is a Tour Booking application built using React and Vite. It allows users to browse a list of available tours, view details about each tour, and book a tour. The application is styled using CSS and does not rely on Material-UI.

## Features

- Display a list of tours with details such as destination, date, price, and image.
- View additional tours with a "Show More" button.
- Book a tour using a modal form.
- Responsive design for different screen sizes.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Components](#components)
   - [TourCard](#tourcard)
   - [TourList](#tourlist)
   - [PaymentModal](#paymentmodal)
4. [Styling](#styling)
5. [Credits](#credits)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Muhammadqasim1011/Lets-Travel.git
   cd Lets-Travel
   ```

2. **Install the dependencies:**

   Make sure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

   This will install all the necessary dependencies for the project.

3. **Run the application:**

   ```bash
   npm run dev
   ```

   This will start the Vite development server and open the application in your default web browser.

## Usage

1. **Homepage:**
   - The homepage displays a list of tours with their details.
   - Initially, only 6 tours are displayed. Click the "Show More" button to view additional tours.

2. **Booking a Tour:**
   - Click on a tour to view more details and book the tour.
   - Fill out the payment form and click "Pay Now" to complete the booking.

## Components

### TourCard

**Location:** `src/components/TourCard.jsx`

Displays information about a single tour, including the destination, date, price, and image.

### TourList

**Location:** `src/components/TourList.jsx`

Displays a list of TourCard components. Includes functionality to show more tours when the "Show More" button is clicked.

### PaymentModal

**Location:** `src/components/PaymentModal.jsx`

A modal form for booking a tour. Includes fields for card number, card holder name, expiry date, and CVV.

## Styling

**Location:** `src/components/TourList.css`, `src/components/TourCard.css`, `src/components/PaymentModal.css`

- Styles for the TourCard, TourList, and PaymentModal components.
- Responsive design to ensure the application looks good on all devices.

## Credits

- Project developed by [Muhammad Qasim](https://muhammadqasim1011.github.io/Muhammad-Qasim/).

## Example Tour Data

```jsx
import Trip1 from "../assets/kum3.jpg";
import Trip2 from "../assets/swat1.jpg";
import Trip3 from "../assets/pesh1.jpg";
import Trip4 from "../assets/4.jpg";
import Trip5 from "../assets/5.jpg";
import Trip6 from "../assets/6.jpg";
import Trip7 from "../assets/7.jpg";
import Trip8 from "../assets/8.jpg";
import Trip9 from "../assets/9.jpg";
import Trip10 from "../assets/10.jpg";
import Trip11 from "../assets/11.jpg";
import Trip12 from "../assets/12.jpg";
import Trip13 from "../assets/13.jpg";
import Trip14 from "../assets/14.jpg";
import Trip15 from "../assets/15.jpg";
import Trip16 from "../assets/16.jpg";
import Trip17 from "../assets/17.jpg";
import Trip18 from "../assets/18.jpg";
import Trip19 from "../assets/19.jpg";
import Trip20 from "../assets/20.jpg";
import Trip21 from "../assets/21.jpg";

const initialTours = [
  { destination: 'Swat Valley', date: '2024-07-15', price: 300, imageUrl: Trip2 },
  { destination: 'Kumrat Valley', date: '2024-08-10', price: 350, imageUrl: Trip1 },
  { destination: 'Peshawar', date: '2024-09-05', price: 250, imageUrl: Trip3 },
  { destination: 'Islamabad', date: '2024-10-20', price: 280, imageUrl: Trip4 },
  { destination: 'Lahore', date: '2024-11-12', price: 320, imageUrl: Trip5 },
  { destination: 'Karachi', date: '2024-12-08', price: 270, imageUrl: Trip6 },
  { destination: 'Murree', date: '2025-01-15', price: 290, imageUrl: Trip7 },
  { destination: 'Gilgit', date: '2025-02-20', price: 380, imageUrl: Trip8 },
  { destination: 'Skardu', date: '2025-03-10', price: 400, imageUrl: Trip9 },
  { destination: 'Faisalabad', date: '2025-04-05', price: 260, imageUrl: Trip10 },
  { destination: 'Quetta', date: '2025-05-20', price: 310, imageUrl: Trip11 },
  { destination: 'Multan', date: '2025-06-12', price: 280, imageUrl: Trip12 },
  { destination: 'Hyderabad', date: '2025-07-08', price: 270, imageUrl: Trip13 },
  { destination: 'Sialkot', date: '2025-08-15', price: 290, imageUrl: Trip14 },
  { destination: 'Sargodha', date: '2025-09-20', price: 260, imageUrl: Trip15 },
  { destination: 'Bahawalpur', date: '2025-10-12', price: 300, imageUrl: Trip16 },
  { destination: 'Rahim Yar Khan', date: '2025-11-08', price: 280, imageUrl: Trip17 },
  { destination: 'Muzaffargarh', date: '2025-12-15', price: 270, imageUrl: Trip18 },
  { destination: 'Jhelum', date: '2026-01-20', price: 290, imageUrl: Trip19 },
  { destination: 'Mardan', date: '2026-02-10', price: 260, imageUrl: Trip20 },
  { destination: 'Chitral', date: '2026-03-05', price: 330, imageUrl: Trip21 },
];
```

## How to Use

1. **Browse Tours:**
   - Open the application and browse the list of available tours.
   - Click "Show More" to view additional tours.

2. **Book a Tour:**
   - Click on a tour to view details and initiate the booking process.
   - Fill out the payment form and click "Pay Now" to book the tour.

3. **Close the Modal:**
   - Click the "Close" button or click outside the modal to close it.
