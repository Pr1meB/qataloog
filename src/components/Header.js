import React from 'react';
import '../styles/Header.css';
import logo from '../assets/icons/logo.svg'; // replace with the actual path to your logo
import userAvatar from '../assets/icons/user-avatar.svg'; // replace with the actual path to your user avatar

const Header = () => { 
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Qatalog Logo" className="header-logo" />
        <span className="header-title">qatalog</span>
      </div>
      <div className="header-right">
        <div className="language-select">
          <span>English</span>
          <svg className="language-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <div className="user-profile">
          <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <span className="user-name">Qatalog Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
