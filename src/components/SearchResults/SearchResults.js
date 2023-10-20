import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = () => {
    return (
        <div className="searchResultsContainer">
            <h2>Search Results</h2>
            <Tracklist context="searchResult" />
        </div>
    );
}

export default SearchResults;