import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidesmall.css';

const translations = {
  en: {
    dashboard: 'Dashboard',
    users: 'Users',
    admins: 'Admins',
    couponCodes: 'Coupon Codes',
    academicLevels: 'Academic Levels',
    platforms: 'Platforms',
    countries: 'Countries',
    contentType: 'Content Type',
    withdrawals: 'Withdrawals',
    settings: 'Settings',
    logout: 'Logout'
  },
  fr: {
    dashboard: 'Tableau de bord',
    users: 'Utilisateurs',
    admins: 'Administrateurs',
    couponCodes: 'Codes Promo',
    academicLevels: 'Niveaux Académiques',
    platforms: 'Plateformes',
    countries: 'Pays',
    contentType: 'Type de Contenu',
    withdrawals: 'Retraits',
    settings: 'Paramètres',
    logout: 'Déconnexion'
  }
};

const SideSmall = ({ onClose }) => {
  const language = localStorage.getItem('language') || 'en';

  return (
    <div className="sm-backdrop" onClick={onClose}>
      <div className="sm-sidebar" onClick={(e) => e.stopPropagation()}>
        <button className="sm-close-btn" onClick={onClose}>
          <i className="close-btn material-symbols-outlined">close</i>
        </button>
        <nav>
          <ul className="sm-sidebar-items">
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">grid_view</i> {translations[language].dashboard}
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">group</i> {translations[language].users}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admins" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">admin_panel_settings</i> {translations[language].admins}
              </NavLink>
            </li>
            <li>
              <NavLink to="/coupon-codes" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">confirmation_number</i> {translations[language].couponCodes}
              </NavLink>
            </li>
            <li>
              <NavLink to="/academic-levels" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">account_tree</i> {translations[language].academicLevels}
              </NavLink>
            </li>
            <li>
              <NavLink to="/platforms" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">location_city</i> {translations[language].platforms}
              </NavLink>
            </li>
            <li>
              <NavLink to="/countries" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">flag</i> {translations[language].countries}
              </NavLink>
            </li>
            <li>
              <NavLink to="/content-type" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">photo_library</i> {translations[language].contentType}
              </NavLink>
            </li>
            <li className="center">
              <NavLink to="/withdrawals" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">credit_card</i> {translations[language].withdrawals}
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="material-icons-outlined">settings</i> {translations[language].settings}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="sm-logout">
          <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <i className="material-icons-outlined">logout</i> {translations[language].logout}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideSmall;
