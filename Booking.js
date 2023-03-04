import React, { useState } from "react";

function Booking() {
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState("12:00 PM");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g. send booking request to restaurant)
  };

  return (
    <div className="booking">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guests">Number of Guests:</label>
        <div className="guests">
          <button onClick={() => setGuests(Math.max(guests - 1, 1))}>-</button>
          <span>{guests}</span>
          <button onClick={() => setGuests(guests + 1)}>+</button>
        </div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="phoneNumber">Call-back Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Booking;
