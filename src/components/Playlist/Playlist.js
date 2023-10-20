import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ onSave }) => {
    const [playlistName, setPlaylistName] = useState('');

    const handleNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div className="playlistContainer">
            <h2>Your Playlist</h2>
            <div className="playlistHeader">
                <input 
                    className="playlistNameInput" 
                    value={playlistName} 
                    onChange={handleNameChange}
                    placeholder="Name your playlist" 
                />
                <button className="saveButton" onClick={onSave}>
                    Save to Spotify
                </button>
            </div>
            <Tracklist context="playlist" />
        </div>
    );
}

export default Playlist;