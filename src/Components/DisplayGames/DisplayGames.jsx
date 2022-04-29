import React from "react";

const DisplayGames = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>
          {props.games.map((element) => {
            return (
              <tr>
                <td>{element.name}</td>
                <td>{element.platform}</td>

              </tr>
            );

          })
          }
        </tbody>
      </table>
    </div>
  )
}
export default DisplayGames;
