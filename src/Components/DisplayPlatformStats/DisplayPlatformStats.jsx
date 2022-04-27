import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({games}) => {

    function generateDataFormChart(){
      console.log(games);
      
      let filteredGames = games.filter(game => game.year >= 2013);
      console.log('Filtered Games', filteredGames)

      let platforms = filteredGames.map(game => {
        return game.platform
      });
      
      console.log('Platforms', platforms)

      let distinctPlatforms = [...new Set(platforms)]

      console.log('Distinct Platforms', distinctPlatforms);

      let platformArrays = distinctPlatforms.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
        
        return [platform, 10, "silver"]
      });

      console.log('Platform Arrays', platformArrays)

      const data = [
        ["Platform", "Sales", { role: "style"}],
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
    
        return data;
    }

  return (
        <div>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
        </div>
  );

};

export default DisplayPlatformStats;
