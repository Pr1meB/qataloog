import React, { useState, useEffect } from 'react';
import '../styles/earnings.css';

const PublisherEarningsTab = () => {
  const [items] = useState([
    { id: 1, level: 'Primary School', rate: 600, dateCreated: '2024-03-10', dateUpdated: '2024-04-10' },
    { id: 2, level: 'Tertiary Education', rate: 2000, dateCreated: '2024-03-13', dateUpdated: '2024-04-13' },
    { id: 3, level: 'High School', rate: 1000, dateCreated: '2024-03-12', dateUpdated: '2024-04-12' }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pb-table-page">
      <div className="pb-table-header">
        <div className="custom-select">
          <div className="select-selected">
            <img src={selectedCountry.flagUrl} alt={selectedCountry.label} style={{ width: 20, height: 'auto', marginRight: 10 }} />
            {selectedCountry.label}
          </div>
          <div className="select-items"></div>
        </div>
        <input type="text" className="pb-search-input" placeholder="Search" />
      </div>
      <table className="pb-data-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>ACADEMIC LEVEL</th>
            <th>RATE</th>
            <th>DATE CREATED</th>
            <th>DATE UPDATED</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.level}</td>
              <td>{item.rate}</td>
              <td>{item.dateCreated}</td>
              <td>{item.dateUpdated}</td>
              <td>
                {index + 1 === items.length ? (
                  <>
                    <button className="pb-update-button">
                      <span className="material-symbols-outlined">check_circle</span> Update
                    </button>
                    <button className="pb-cancel-button">
                      <span className="material-symbols-outlined">cancel</span> Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className="pb-edit-button">
                      <span className="material-symbols-outlined">edit</span> Edit
                    </button>
                    <button className="pb-delete-button">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pb-pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        {[...Array(Math.ceil(items.length / itemsPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => handlePageChange(number + 1)}>{number + 1}</button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(items.length / itemsPerPage)}>&gt;</button>
      </div>
      <button type="submit" className="update-button"><span className="material-symbols-outlined">add_circle</span> Add new earnings</button>
    </div>
  );
};

export default PublisherEarningsTab;
