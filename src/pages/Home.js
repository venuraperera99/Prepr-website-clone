import React, {useState} from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import ProgramList from '../components/programlist/ProgramList';
import './Home.css'

import programsData from '../programData';

export const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [clickedWord, setClickedWord] = useState('');
  const [selectedTab, setSelectedTab] = useState('Labs');
  const [filter, setFilter] = useState('');
  const [darkMode, setDarkMode] = useState(false); 

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setFilter('');
  };

  const handleSearchClick = () => {
    console.log('Search button clicked!');
  };

  const handleFilterClick = (word) => {
    setFilter(word);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleWordClick = (word) => {
    if (clickedWord === word) {
      setClickedWord("");
    } else {
      setClickedWord(word);
    }
  }

  // Sample list of word suggestions
  const wordSuggestions = [
    'React',
    'JavaScript',
    'CSS',
    'HTML',
    'Web Development',
    'Frontend',
    'Backend',
    'Node.js',
    'APIs',
    'Responsive Design',
    'UI/UX',
    'State Management',
  ];

  return (
    <div className={`home-root ${darkMode ? 'dark-mode' : ''}`}>
        <Header/>
        <div className='gradient-div'>
            
            <div className='explore-content'>
              <h1>Explore Your Interests</h1>
              <p>We'll recommend content based on your interests we've listed here.<br/>
                  Feel free to add or remove topics to customize your experience
              </p>
              <input 
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleInputChange}
              />
              <h3>Click an interest to narrow your recommendations.</h3>
              <div className="word-suggestions">
                  {wordSuggestions.map((word, index) => (
                  <div key={index} 
                      className={`word-container ${
                        clickedWord === word ? 'clicked' : ''
                      }`}
                      onClick={() => handleWordClick(word)}>
                      {word}
                  </div>
                  ))}
              </div>
            </div>
        </div>

        <div className="programs-section">
        <div className="tab-header">
          <h2 className={selectedTab === "Labs" ? "active" : ""} onClick={() => handleTabClick("Labs")}>Labs</h2>
          <h2 className={selectedTab === "Challenges" ? "active" : ""} onClick={() => handleTabClick("Challenges")}>Challenges</h2>
          <h2 className={selectedTab === "Resources" ? "active" : ""} onClick={() => handleTabClick("Resources")}>Resources</h2>
          <h2 className={selectedTab === "Projects" ? "active" : ""} onClick={() => handleTabClick("Projects")}>Projects</h2>
        </div>
        <div className="filter-sort-bar">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearchClick}>
              Search
            </button>
          </div>
          <div className="sort-by">
            <label>Sort by:</label>
            <select>
              <option value="recent">Recently added</option>
              <option value="popular">Most popular</option>
            </select>
          </div>
        </div>
        <ProgramList programs={programsData[selectedTab]} filter={filter} selectedTab={selectedTab}/>
        <div className="word-suggestions">
          {/* Word suggestions from the gradient-div section */}
        </div>
      </div>
      <div className="dark-mode-toggle">
        <button onClick={handleDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
        <Footer/>
    </div>
  )
}
