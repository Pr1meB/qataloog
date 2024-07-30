import React, { useState } from 'react';

const PasswordTab = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBlur = () => {
    setPasswordsMatch(newPassword === confirmPassword);
  };

  return (
    <div className="password-tab">
      <form className="password-form">
        <div className="form-group">
          <label>Current Password</label>
          <div className="password-input-wrapper">
            <input type={showPassword ? 'text' : 'password'} />
            <button type="button" className="toggle-password" onClick={handleTogglePasswordVisibility}>
              {showPassword ? <span className="eyeicon material-icons-outlined">visibility_off</span> : <span className="eyeicon material-icons-outlined">visibility</span>}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>New Password</label>
          <div className="password-input-wrapper">
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
              onBlur={handleBlur}
            />
            <button type="button" className="toggle-password" onClick={handleTogglePasswordVisibility}>
              {showPassword ? <span className="eyeicon material-icons-outlined">visibility_off</span> : <span className="eyeicon material-icons-outlined">visibility</span>}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <div className="password-input-wrapper">
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              onBlur={handleBlur}
            />
            <button type="button" className="toggle-password" onClick={handleTogglePasswordVisibility}>
              {showPassword ? <span className="eyeicon material-icons-outlined">visibility_off</span> : <span className="eyeicon material-icons-outlined">visibility</span>}
            </button>
          </div>
          {!passwordsMatch && (
            <div className="error-message">
              <span className="eyeicon material-icons-outlined">warning</span> Passwords don't match
            </div>
          )}
          {passwordsMatch && newPassword && confirmPassword && (
            <div className="success-message">
              <span className="correct material-icons-outlined">check_circle</span> Passwords Match!
            </div>
          )}
        </div>
        <button type="submit" className="update-button">Update Password</button>
      </form>
    </div>
  );
};

export default PasswordTab;
