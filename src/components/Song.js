import React from "react";

const Song = ({song}) => {

    return(
        <li>
            <img src={song["im:image"][2].label} alt="album art"/>
            <section>
                <h2>{song["im:name"].label}</h2>
                <h3>{song["im:artist"].label}</h3>
                <audio controlsList="nodownload" controls>
                    <source src={song["link"][1]["attributes"]["href"]}/>
                </audio>
            </section>
        </li>
    )
}

export default Song;