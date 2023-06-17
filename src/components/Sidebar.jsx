import React, { useState } from 'react';
import './Sidebar.css';
import { IoHomeOutline, IoRadioOutline, IoFilmOutline, IoCloudUploadOutline } from "react-icons/io5";
import logoSidebar from '../assets/logoSidebar.png';

export default function Sidebar() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const getIconClassName = (iconName) => {
    return `icon ${activeIcon === iconName ? 'active' : ''}`;
  };

  return (
    <div className="sidebar">
      <img src={logoSidebar} className="logo-sidebar" alt="Owner's Photo" />
      <IoHomeOutline
        className={getIconClassName('home')}
        onClick={() => handleIconClick('home')}
      />
      <IoRadioOutline
        className={getIconClassName('radio')}
        onClick={() => handleIconClick('radio')}
      />
      <IoFilmOutline
        className={getIconClassName('film')}
        onClick={() => handleIconClick('film')}
      />
      <IoCloudUploadOutline
        className={getIconClassName('upload')}
        onClick={() => handleIconClick('upload')}
      />
    </div>
  );
}
