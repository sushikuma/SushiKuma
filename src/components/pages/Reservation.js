import React from 'react';
import './Reservation.css';

const Reservation = ( props ) => (
  <div id="reservation-container">
    <h2>Reservation</h2>

    <p>
      Online reservation system is currently closed due to COVID-19.
      <br />Please give us a call to make a reservation.
      <br />Sorry for the inconvenience.
    </p>

    <p>
      <br />Roseville: 916.788.1999
      <br /><br />
      El Dorado Hills: 916.939.6578
    </p>
  </div>
);

export default Reservation;
