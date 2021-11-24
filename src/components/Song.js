import React from "react";
import "./Song.css";

const Song = ({song}) => {

    return(
        <li>
            <div className="block">
                <img src={song["im:image"][2].label} alt="album art"/>
                <section>
                    <h2>{song["im:name"].label}</h2>
                    <h3>{song["im:artist"].label}</h3>
                    <audio controlsList="nodownload" controls>
                        <source src={song["link"][1]["attributes"]["href"]}/>
                    </audio>
                </section>
            </div>
        </li>
    )
}

export default Song;