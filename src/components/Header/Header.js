import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ onSearch, onSearchComplete, hasSearched }) => {
    return (
        <div className={`header ${hasSearched ? 'shrunk-header' : ''}`} >
            <h1>Jammming</h1>
            <span>Easily create and save custom playlists to your Spotify account.</span>
            <SearchBar onSearch={onSearch} onSearchComplete={onSearchComplete} />
        </div>
    );
}

export default Header;