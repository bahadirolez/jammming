import React from 'react';
import './Track.css';
import PlusIcon from "../../assets/icons/plus-icon.svg";
import MinusIcon from "../../assets/icons/minus-icon.svg"

const Track = ({ context }) => {
    return (
        <div className={`trackBox ${context === "searchResult" ? "searchResultTrack" : "playlistTrack"}`}>
            <div className="imageBox">
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d0/Cloud_Nine_coverartwork.jpg" className="albumCover" />
                { context === 'searchResult' ?
                    <button className="addButton">
                        <img src={PlusIcon} alt="Add Button" />
                    </button> :
                    <button className="removeButton">
                        <img src={MinusIcon} alt="Remove Button" />
                    </button>
                }
            </div>
        
            <div className="trackDetails">
                <h3>Stole the show</h3>
                <span>Kygo</span>
                <span> • </span>
                <span>Cloud Nine</span>
            </div>
        </div>
    );
}

export default Track;