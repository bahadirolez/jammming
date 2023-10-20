import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import dummyTracks from './assets/tracks/dummyTracks';

function App() {
  const [searchResults, setSearchResults] = useState(dummyTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("Name your playlist here...");

  const addTrack = (track) => {
    if(!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
  }

  return (
    <div className="App">
      <SearchBar />
      <SearchResults tracks={searchResults} onAdd={addTrack} />
      <Playlist playlistTracks={playlistTracks} playlistName={playlistName} onNameChange={setPlaylistName} onRemove={removeTrack} />
    </div>
  );
}

export default App;