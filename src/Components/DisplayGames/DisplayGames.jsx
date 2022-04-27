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
              if (game.rank.includes(props.userInput)) return true;
              if (game.name.includes(props.userInput)) return true;
              if (game.platform.includes(props.userInput)) return true;
              if (game.year.includes(props.userInput)) return true;
              if (game.genre.includes(props.userInput)) return true;
              if (game.publisher.includes(props.userInput)) return true;
              if (game.north_american_sales.includes(props.userInput))
                return true;
              if (game.europe_sales.includes(props.userInput)) return true;
              if (game.japan_sales.includes(props.userInput)) return true;
              if (game.other_sales.includes(props.userInput)) return true;
              if (game.global_sales.includes(props.userInput)) return true;
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
