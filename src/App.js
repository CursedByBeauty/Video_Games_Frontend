import React, { useEffect, useState } from 'react';
import axios from "axios";
import EntriesChart from './Components/EntriesChart/EntriesChart';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayGames from './Components/DisplayGames/DisplayGames';


function App() {
  const [entries, setEntries] = useState()
  const [games, setGames] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getAllVideoGames();
    console.log("useEfect");
  }, []);

  async function getAllVideoGames() {
    let response = await axios.get("https://localhost:7260/api/games/");
    setGames(response.data);
  }

  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h3> Video Games  </h3>
      <SearchBar getUserInput={getUserInput} userInput={userInput} />
      <DisplayGames games={games} userInput={userInput} />
      <EntriesChart games={games} />
    </div>
  );
}

export default App;
