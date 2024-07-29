import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-items">
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">grid_view</i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">group</i> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admins" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">admin_panel_settings</i> Admins
            </NavLink>
          </li>
          <li>
            <NavLink to="/coupon-codes" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">confirmation_number</i> Coupon Codes
            </NavLink>
          </li>
          <li>
            <NavLink to="/academic-levels" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">account_tree</i> Academic Levels
            </NavLink>
          </li>
          <li>
            <NavLink to="/platforms" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">location_city</i> Platforms
            </NavLink>
          </li>
          <li>
            <NavLink to="/countries" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">flag</i> Countries
            </NavLink>
          </li>
          <li>
            <NavLink to="/content-type" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">photo_library</i> Content Type
            </NavLink>
          </li>
          <li className="center">
            <NavLink to="/withdrawals" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">credit_card</i> Withdrawals
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <i className="material-icons-outlined">settings</i> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logout">
        <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <i className="material-icons-outlined">logout</i> Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
