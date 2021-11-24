import React from "react";
import Song from "./Song";


const ChartSongs = ({chart}) => {

    const songItems = chart.map((song) => {
        return <Song song={song}/>
    })

    return(
        <ol>
            {songItems}
        </ol>
    )
}

export default ChartSongs;