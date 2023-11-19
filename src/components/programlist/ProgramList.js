import React from 'react';
import { MdScience } from 'react-icons/md';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { FaBook } from 'react-icons/fa6';
import { BsFileEarmarkCodeFill } from 'react-icons/bs';
import './ProgramList.css';

const ProgramList = ({ programs, filter, selectedTab }) => {
  const filteredPrograms = filter
    ? programs.filter(program => program.title.toLowerCase().includes(filter.toLowerCase()))
    : programs;

  const tabIcons = {
    Labs: <MdScience size={20} color="blue" />, 
    Challenges: <IoExtensionPuzzle size={20} color="#28a745" />, 
    Resources: <FaBook size={20} color="purple" />, 
    Projects: <BsFileEarmarkCodeFill size={20} color="orange" />, 
  };

  return (
    <div className="program-list">
      {filteredPrograms.map((program, index) => (
        <div key={index} className="program-item-container">
          <div className="program-item">
            <div className="program-item-left">
              <img src={program.imageUrl} alt={program.title} />
            </div>
            <div className="program-item-right">
              <h3>
                <span>{program.title}</span>
                <button className="follow-button">Follow</button>
              </h3>
              <p>
                {tabIcons[selectedTab]}
                <strong>{`${program.type} Lab `}</strong>
                <strong>Last update:</strong> {`${program.lastUpdate} `}
                <strong>Members:</strong> {`${program.members} `}
                <strong>Duration:</strong> {`${program.duration} `}
                <strong>Level:</strong> {`${program.level}`}
                </p>
              <p className='program-desc'>{program.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgramList;