import React, { useState } from "react";

const DisplayGames = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {props.games
            .filter((game) => {
              if (game.rank(props.userInput)) return true;
              if (game.name(props.userInput)) return true;
              if (game.platform(props.userInput)) return true;
              if (game.year(props.userInput)) return true;
              if (game.genre(props.userInput)) return true;
              if (game.publisher(props.userInput)) return true;
              if (game.north_american_sales(props.userInput))
                return true;
              if (game.europe_sales(props.userInput)) return true;
              if (game.japan_sales(props.userInput)) return true;
              if (game.other_sales(props.userInput)) return true;
              if (game.global_sales(props.userInput)) return true;
            })
            .map((game) => {
              return (
                <tr>
                  <td>{game.rank}</td>
                  <td>{game.name}</td>
                  <td>{game.platform}</td>
                  <td>{game.year}</td>
                  <td>{game.genre}</td>
                  <td>{game.publisher}</td>
                  <td>{game.north_american_sales}</td>
                  <td>{game.europe_sales}</td>
                  <td>{game.japan_sales}</td>
                  <td>{game.other_sales}</td>
                  <td>{game.global_sales}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayGames;
