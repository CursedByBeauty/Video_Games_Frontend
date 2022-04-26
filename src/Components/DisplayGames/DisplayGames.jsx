import React, { useState } from 'react';


const DisplayGames = (props) => {
    return ( 
        <div>
           <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Platform</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>North American Sales</th>
            <th>Europe Sales</th>
            <th>Japan Sales</th>
            <th>Other Sales</th>
            <th>Global Sales</th>
          </tr>
        </thead>
        <tbody>
          {props.games
            .filter((game) => {
              if (game.rank.includes(props.userInput)) return true;
              if (game.name.includes(props.userInput)) return true;
              if (game.platform.includes(props.userInput)) return true;
              if (game.year.includes(props.userInput)) return true;
              if (game.genre.includes(props.userInput)) return true;
              if (game.publisher.includes(props.userInput)) return true;
              if (game.northAmericanSales.includes(props.userInput)) return true;
              if (game.europeSales.includes(props.userInput)) return true;
              if (game.japanSales.includes(props.userInput)) return true;
              if (game.otherSales.includes(props.userInput)) return true;
              if (game.globalSales.includes(props.userInput)) return true;

            })
            .map((game) => {
              return (
                <tr>
                  <td>{game.title}</td>
                  <td>{game.artist}</td>
                  <td>{game.album}</td>
                  <td>{game.genre}</td>
                  <td>{game.release_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table> 
        </div>
    );
}
 
export default DisplayGames;