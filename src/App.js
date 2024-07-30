import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Settings from './pages/Settings';
import './styles/App.css';

function App() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <button
            className="sidebar-toggle"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <Sidebar isCollapsed={isSidebarCollapsed} />
          <div className={`content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <Routes>
              <Route path="/settings" element={<Settings />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
