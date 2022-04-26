import React, { useEffect, useState } from 'react';
import axios from "axios";
import EntriesChart from './Components/EntriesChart/EntriesChart';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  const [entries, setEntries] = useState()
  const [videoGames, setVideoGames] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getAllVideoGames();
    console.log("useEfect");
  }, []);

  async function getAllVideoGames() {
    let response = await axios.get("https://localhost:7260/api/games/");
    setVideoGames(response.data);
  }

  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h3> Video Games  </h3>
      <SearchBar getUserInput={getUserInput} userInput={userInput} />
      <EntriesChart />
    </div>
  );
}

export default App;
