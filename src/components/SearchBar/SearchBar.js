import React from 'react';
import './SearchBar.css';
import SearchIcon from '../../assets/icons/SearchIcon.svg';

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Search for songs, artists, albums..." />
                <div className ="icon container">
                    <img src={SearchIcon} alt="Search" className="search-icon" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;