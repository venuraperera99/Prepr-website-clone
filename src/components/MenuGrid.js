import React from 'react';
import './MenuGrid.css';

export const MenuGrid = ({ onClose }) => {
  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    onClose();
  };

  const menuItems = [
    "Item 1", "Item 2", "Item 3", "Item 4",
    "Item 5", "Item 6", "Item 7", "Item 8",
    "Item 9", "Item 10", "Item 11", "Item 12",
  ];

  return (
    <div className="menu-grid-container">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item" onClick={() => handleItemClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
