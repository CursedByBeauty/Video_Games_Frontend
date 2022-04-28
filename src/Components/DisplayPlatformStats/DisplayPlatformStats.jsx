import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({ games }) => {

  function generateDataFormChart()  {
    console.log(games);
    let filteredGames = games.filter(game => game.year >= 2013);
    console.log('Filtered Games', filteredGames)
    
    let platforms = filteredGames.map(game => {
      return game.platform
    });

    console.log('Platforms', platforms)

    let distinctPlatforms = [...new Set(platforms)]

    console.log('Distinct Platforms', distinctPlatforms);
    
    let sumWithInitial = globalSalesForPlatform.reduce((total, currentValue) => total + currentValue, 0).toFixed(2);
    console.log("Sum", sumWithInitial);
    return [platforms, sumWithInitial, "silver"]
  }

  console.log('Platform Arrays', platformArrays)
  // we need to loop through allGamesForPlatform and sum each games global sales
  // once we have the sum of all of those games global sales we're going to take that sum 
  // and place it where 10 is (between platform and "silver")

  const data = [
    ["Platform", "Sales", { role: "style" }],
    ...platformArrays
    // ["PS4", 290, "blue"],
    // ["3DS", 250, "blue"],
    // ["XOne", 160, "blue"],
    // ["WiiU", 140, "blue"],
    // ["PS3", 975, "blue"],
    // ["X360", 985, "blue"],
    // ["PC", 225, "blue"],
    // ["Wii", 925, "blue"],
    // ["PSV", 50, "blue"],
    // ["DS", 810, "blue"],
    // ["PSP", 300, "blue"],
  ];

  console.log('Data', data)

    // return data;
  

  return (
    <div>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
    </div>
  );

};

export default DisplayPlatformStats;
