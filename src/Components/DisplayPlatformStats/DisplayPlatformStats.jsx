import { Chart } from "react-google-charts";
import React from 'react';


const  DisplayPlatformStats = ({ games }) => {

  function generateDataForChart() {
   let filteredGames = games.filter(game => game.year >= 2013)

   

    let platforms = filteredGames.map(game => {
      return game.platform
    });


    let distinctPlatforms = [...new Set(platforms)]

    let platformArrays = distinctPlatforms.map(platform => {

      let allGames = filteredGames.filter(game => game.platform === platform);
      
      

      let globalSales = allGames.map(game => {
        return game.globalSales
      });

      let sum = globalSales.reduce(
        (total, currentValue) => total + currentValue, 0).toFixed(2);
        console.log("Sum", sum);
      
      return [platform, parseFloat(sum) , "blue"]
    });

    
    
    const data = [
        ["Platform", "Sales (in millions)", { role: "style" }],
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
    
     
      
      return data;
    }
  
  
    return (
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
    );
  
}
 
export default  DisplayPlatformStats;
