import React from 'react';

const ProfileTab = () => {
  return (
    <div className="profile-tab">
      <div className="profile-picture-section">
        <img src="/assets/images/default_profile_picture.png" alt="Profile" className="profile-picture" />
        <div className="profile-picture-buttons">
          <button className="upload-button">Upload New Picture</button>
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <form className="profile-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value="John Doe"  />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value="john@example.com"  />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" value="+234" />
        </div>
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
};

export default ProfileTab;
