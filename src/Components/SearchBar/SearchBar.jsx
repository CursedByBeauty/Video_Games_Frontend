import React, { useState } from 'react';

const SearchBar = (props) => {
    const [userInput, setUserInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let filteredGames = props.games.filter((game) => {
            if (game.name.includes(userInput)) { return true };
        return filteredGames
        })
        props.setGames(filteredGames)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>

            <input value={userInput} onChange={(event) => setUserInput(event.target.value)} />
            <button type="submit" class="btn btn-primary">Search</button>

        </form>
    );
}

export default SearchBar;