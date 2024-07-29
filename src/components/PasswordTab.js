import React from 'react';

const PasswordTab = () => {
  return (
    <div className="password-tab">
      <form className="password-form">
        <div className="form-group">
          <label>Current Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input type="password" />
        </div>
        <button type="submit" className="update-button">Update Password</button>
      </form>
    </div>
  );
};

export default PasswordTab;
