import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const EntriesChart = (props) => {

    const [gamedata, setGameData] = useState([])
    
    
    useEffect(() => {
        let tempGameData = props.games.map(game => {
            return [game.north_american_sales, game.europe_sales, game.japan_sales, game.other_sales, game.global_sales]
        });
        setGameData(tempGameData)
    }, [props.games])

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={[
        ["Element", "Sales", { role: "style" }],
        ["PS4", 290, "blue"],
        ["3DS", 250, "blue"],
        ["XOne", 160, "blue"],
        ["WiiU", 140, "blue"],
        ["PS3", 975, "blue"],
        ["X360", 985, "blue"],
        ["PC", 225, "blue"],
        ["Wii", 925, "blue"],
        ["PSV", 50, "blue"],
        ["DS", 810, "blue"],
        ["PSP", 300, "blue"],
        ...gamedata
      ]}
    />
  );

};

export default EntriesChart;
