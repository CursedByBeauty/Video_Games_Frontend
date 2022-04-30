import React, {useState} from 'react';
const Buttons = (props) => {
    const [singleGame, setSingleGame] = useState([])
    function findGames(name) {
        let singleGame = props.games.filter((game) => {
            if (game.name === name) { return true }

        })
      console.log(singleGame)
    }
    return (
        <button onClick={() => {findGames(props.currentName)}}>View Status</button>
        )
    }
export default Buttons

