import React, {useEffect, useState} from "react";
import ChartSongs from "../components/ChartSongs";
import "./ChartContainer.css"

const ChartContainer = () => {

    let [chart, setChart] = useState([])

    useEffect(() => {
        getChart();
    }, [])

    const getChart = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(data => data.feed.entry)
            .then(songs => setChart(songs));            
    }

    return(
        <>
            <h1>iTunes Chart</h1>
            <ChartSongs chart={chart}/>
        </>
    )
}

export default ChartContainer;