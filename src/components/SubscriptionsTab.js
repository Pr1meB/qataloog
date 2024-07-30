import React, { useState, useEffect } from 'react';
import '../styles/subscriptions.css';

const SubscriptionsTab = () => {
  const countryOptions = [
    { value: 'Nigeria', label: 'Nigeria', flagUrl: 'https://media.istockphoto.com/id/652740802/vector/nigeria.jpg?s=612x612&w=0&k=20&c=CzqO6nCnCM6KXJp-nZWBV3oxRI5963lwdnQ5TT4TN7Q=' },
    { value: 'Senegal', label: 'Senegal', flagUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClQ9DDh-XExBS812l-GWVqUrfAT9h6WGUbQ&s' }
  ];

  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  useEffect(() => {
    const selectDropdown = document.querySelector('.custom-select');
    const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');

    const openDropdown = () => {
      items.style.display = items.style.display === 'none' ? 'block' : 'none';
    };

    const selectItem = (event, item) => {
      setSelectedCountry(item);
      selected.innerHTML = `<img src="${item.flagUrl}" alt="${item.label}">${item.label}`;
      items.style.display = 'none';
    };

    selected.addEventListener('click', openDropdown);

    items.innerHTML = '';
    countryOptions.forEach(option => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="${option.flagUrl}" alt="${option.label}">${option.label}`;
      div.addEventListener('click', (event) => selectItem(event, option));
      items.appendChild(div);
    });

    document.addEventListener('click', (event) => {
      if (!selectDropdown.contains(event.target)) {
        items.style.display = 'none';
      }
    });

    return () => {
      selected.removeEventListener('click', openDropdown);
      document.removeEventListener('click', (event) => {
        if (!selectDropdown.contains(event.target)) {
          items.style.display = 'none';
        }
      });
    };
  }, [selectedCountry]);

  return (
    <div className="subscriptions-tab">
      <div className="custom-select">
        <div className="select-selected">
          <img src={selectedCountry.flagUrl} alt={selectedCountry.label} style={{ width: 20, height: 'auto', marginRight: 10 }} />
          {selectedCountry.label}
        </div>
        <div className="select-items"></div>
      </div>

      <div className="tab-container mx-auto mb-4">
        <div className="tab active">Yearly</div>
        <div className="tab">Annually</div>
        <div className="tab">Bi-Annually</div>
      </div>

      <form className="profile-form">
        <div className="form-group">
          <label>Plan Duration (Months)</label>
          <input type="number" placeholder="6" required />
        </div>
        <div className="form-group">
          <label>Plan Duration (Days)</label>
          <input type="number" placeholder="180" required />
        </div>
        <div className="form-group">
          <label>Subscription Fee (₦)</label>
          <input type="number" placeholder="5000" required />
        </div>
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
};

export default SubscriptionsTab;
