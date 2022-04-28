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
          {/* {props.games
            .filter((game) => {

              if (game.name.includes(props.userInput)) return true;

            })
            .map((game) => {
              return (
                <tr>

                  <td>{game.name}</td>

                </tr>
              );
            })} */}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayGames;
