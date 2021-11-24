import React from "react";

const Song = ({song}) => {
    return(
        <li>
            <img src={song["im:image"][2].label} alt="album art"/>
            <h2>{song["im:name"].label}</h2>
            <h3>{song["im:artist"].label}</h3>
            <audio src={song["link"][1]["attributes"]["href"]}/>
        </li>
    )
}

export default Song;