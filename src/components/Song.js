import React from "react";

const Song = ({song}) => {
    return(
        <li>
            <h2>{song["im:name"].label}</h2>
            <h3>{song["im:artist"].label}</h3>
        </li>
    )
}

export default Song;