import React, { useEffect } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css'; // Import the CSS for styling

const ProfileTab = () => {
  useEffect(() => {
    // Ensure intlTelInput is available in the window scope
    const phoneNumberInput = document.querySelector('.phone-number-input');
    const iti = intlTelInput(phoneNumberInput, {
      initialCountry: 'ng', // Set default country to Nigeria
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // Optional for formatting/validation
    });

    // Cleanup function to destroy intlTelInput instance on component unmount
    return () => {
      if (iti) iti.destroy();
    };
  }, []);

  return (
    <div className="profile-tab">
      <div className="profile-picture-section">
        <div className="profile-picture-div">
          <div className="profile-picture"></div>
        </div>
        <div className="profile-picture-buttons">
          <button className="upload-button">Upload New Picture</button>
          <button className="remove-button"><span className="material-symbols-outlined">remove_circle</span> Remove</button>
        </div>
      </div>
      <form className="profile-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="john@example.com" required/>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" className="phone-number-input" required/>
        </div>
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
};

export default ProfileTab;
