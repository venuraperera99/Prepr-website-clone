import React, { useState } from 'react';
import './Header.css'; // Import your external stylesheet
import { FaBell, FaQuestionCircle, FaSearch, FaUserCircle, FaBars } from 'react-icons/fa'; // Import specific icons from the Font Awesome set
import { FaMessage } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";

export const Header = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
  return (
    <div className="header-container">
      <h1>PreprLabs</h1>
      <nav>
        <ul className='header-tabs'>
          <li>Explore</li>
          <li>Dashboard</li>
          <li>My Challenges</li>
          <li>My Labs</li>
          <li>My Projects</li>
          <li>Career Explorer</li>
        </ul> 
      </nav>
    
      <nav>
        <ul>
          <li><FaBell/></li>
          <li><FaMessage /></li>
          <li><FaQuestionCircle /></li>
          <li>
            <div>
                <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                />
            </div>
          </li>
          <li><FaUserCircle /></li>
          <li><BsGrid3X3GapFill /></li>
        </ul> 
      </nav>
    </div>
  )
}
