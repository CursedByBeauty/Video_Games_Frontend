import React from "react";
import Buttons from '../GamePerConsoleChart/Buttons'
const DisplayGames = (props) => {
  return (
    <div>
      <table className= 'table'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {props.games.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.platform}</td>
                <td>{element.year}</td>
                <td>{element.genre}</td>
                <td>{element.publisher}</td>
                <td><Buttons currentName ={element.name} games ={props.games}/></td>
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
