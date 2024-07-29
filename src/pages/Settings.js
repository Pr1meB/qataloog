import React, { useState } from 'react';
import ProfileTab from '../components/ProfileTab';
import PasswordTab from '../components/PasswordTab';
import SubscriptionsTab from '../components/SubscriptionsTab';
import PublisherEarningsTab from '../components/PublisherEarningsTab';
import '../styles/Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

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
        <h1>Settings</h1>
        <div className="settings-tabs">
          <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : 'inactive'}>Profile</button>
          <button onClick={() => setActiveTab('password')} className={activeTab === 'password' ? 'active' : 'inactive'}>Password</button>
          <button onClick={() => setActiveTab('subscriptions')} className={activeTab === 'subscriptions' ? 'active' : 'inactive'}>Subscriptions</button>
          <button onClick={() => setActiveTab('publisher-earnings')} className={activeTab === 'publisher-earnings' ? 'active' : 'inactive'}>Publisher Earnings</button>
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
