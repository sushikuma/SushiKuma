import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './Reservation.css';

const Reservation = ( props ) => {
  const [isActive, setIsActive] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_tp2by9o', 'template_4xt931d', e.target, 'user_W7uVP88b4bDlr9IVxkI6O').then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  function onChange(value) {
    console.log("Captcha value: ", value);
    setIsActive(true);
    if (value == null) setIsActive(false);
  }

  return (
    <div id="reservation-container">
      {/* <h2>Reservation</h2>

      <p>
        Online reservation system is currently closed due to COVID-19.
        <br />Please give us a call to make a reservation.
        <br />Sorry for the inconvenience.
      </p>

      <p>
        <br />Roseville: 916.788.1999
        <br /><br />
        El Dorado Hills: 916.939.6578
      </p> */}
      <h2>Reservation</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        
        <div className='textbox-container'>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
        </div>
        <div className='textbox-container'>
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your email address" required />
        </div>
        <div className='textbox-container'>
          <label>Location</label>
          <select name="location" required>
            <option selected disabled hidden value=''>-- select a location --</option>
            <option value="El Dorado Hills">El Dorado Hills</option>
            <option value="Roseville">Roseville</option>
          </select>
        </div>
        <div className='textbox-container'>
          <label>Date</label>
          <input type="date" name="date" required />
        </div>
        <div className='textbox-container'>
          <label>Time</label>
          <select name="time" required>
            <option selected disabled hidden value=''>-- select time --</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="1:00">1:00 PM</option>
            <option value="1:30">1:30 PM</option>
            <option value="2:00">2:00 PM</option>
            <option value="4:00">4:00 PM</option>
            <option value="4:30">4:30 PM</option>
            <option value="5:00">5:00 PM</option>
            <option value="5:30">5:30 PM</option>
            <option value="6:00">6:00 PM</option>
            <option value="6:30">6:30 PM</option>
            <option value="7:00">7:00 PM</option>
            <option value="7:30">7:30 PM</option>
            <option value="8:00">8:00 PM</option>
          </select>
        </div>
        <div className='textbox-container'>
          <label>How many?</label>
          <p>(Please give us a call if your party is greater than 12)</p>
          <input type="number" name="number" min="1" max="12" required></input>
        </div>


        <div className='recaptcha'>
          <ReCAPTCHA 
            sitekey="6LcZcJcaAAAAAGLWPsGioJaLZ_bxs41qXOpbginL" 
            onChange={onChange} 
          />
        </div>

        <input className={isActive? 'active' : ''} type="submit" value="Send" />
      </form>


    </div>
  );
}

export default Reservation;
