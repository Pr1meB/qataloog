import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import userAvatar from '../assets/images/propic.webp'; // replace with the actual path to your user avatar
import logo from '../assets/images/qataloog.png';

const languages = {
  en: { label: 'English', code: 'en', image: 'https://media.istockphoto.com/id/652740802/vector/nigeria.jpg?s=612x612&w=0&k=20&c=CzqO6nCnCM6KXJp-nZWBV3oxRI5963lwdnQ5TT4TN7Q=' },
  fr: { label: 'Francais', code: 'fr', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClQ9DDh-XExBS812l-GWVqUrfAT9h6WGUbQ&s' },
};

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');

  const changeLanguage = (languageCode) => {
    localStorage.setItem('language', languageCode);
    setSelectedLanguage(languageCode);
    window.location.reload(); // Reload the page to apply the new language
  };

  useEffect(() => {
    document.documentElement.lang = selectedLanguage;
  }, [selectedLanguage]);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Qatalog Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <div className="language-select">
          <span><img src={languages[selectedLanguage].image} alt="User Avatar" className="language-icon" /> {languages[selectedLanguage].label}</span>
          <div className="language-dropdown">
            {Object.keys(languages).map((lang) => (
              <div key={lang} onClick={() => changeLanguage(lang)}>
                <img src={languages[lang].image} alt="User Avatar" className="language-icon" /> {languages[lang].label}
              </div>
            ))}
          </div>
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
