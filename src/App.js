import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SideSmall from './components/sidesmall';
import Settings from './pages/Settings';
import './styles/App.css';

function App() {
  const [isSidebarCollapsed] = useState(false);
  const [isSideSmallOpen, setSideSmallOpen] = useState(false);

  const toggleSideSmall = () => {
    setSideSmallOpen(!isSideSmallOpen);
  };

  const closeSideSmall = () => {
    setSideSmallOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <button
            className="sidebar-toggle"
            onClick={toggleSideSmall}
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
        {isSideSmallOpen && <SideSmall onClose={closeSideSmall} />}
      </div>
    </Router>
  );
}

export default App;
