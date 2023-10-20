import React from "react";
import Track from "../Track/Track";
import "./Tracklist.css"

function Tracklist({ context }) {
    return (
        <div className="tracklistContainer">
            <Track context={context} />
            <Track context={context} />
            <Track context={context} />
            <Track context={context} />
            <Track context={context} />
            <Track context={context} />
        </div>
    )
}

export default Tracklist;