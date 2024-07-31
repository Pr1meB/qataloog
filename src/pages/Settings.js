import React, { useState } from 'react';
import ProfileTab from '../components/ProfileTab';
import PasswordTab from '../components/PasswordTab';
import SubscriptionsTab from '../components/SubscriptionsTab';
import PublisherEarningsTab from '../components/PublisherEarningsTab';
import '../styles/Settings.css';

const translations = {
  en: {
    settings: 'Settings',
    profile: 'Profile',
    password: 'Password',
    subscriptions: 'Subscriptions',
    publisherEarnings: 'Publisher Earnings',
  },
  fr: {
    settings: 'Paramètres',
    profile: 'Profil',
    password: 'Mot de passe',
    subscriptions: 'Abonnements',
    publisherEarnings: 'Revenus des éditeurs',
  },
};

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const language = localStorage.getItem('language') || 'en';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'password':
        return <PasswordTab />;
      case 'subscriptions':
        return <SubscriptionsTab />;
      case 'publisher-earnings':
        return <PublisherEarningsTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-content">
        <h2>{translations[language].settings}</h2>
        <div className="settings-tabs">
          <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : 'inactive'}>
            {translations[language].profile}
          </button>
          <button onClick={() => setActiveTab('password')} className={activeTab === 'password' ? 'active' : 'inactive'}>
            {translations[language].password}
          </button>
          <button onClick={() => setActiveTab('subscriptions')} className={activeTab === 'subscriptions' ? 'active' : 'inactive'}>
            {translations[language].subscriptions}
          </button>
          <button onClick={() => setActiveTab('publisher-earnings')} className={activeTab === 'publisher-earnings' ? 'active' : 'inactive'}>
            {translations[language].publisherEarnings}
          </button>
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
