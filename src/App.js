import React, { useEffect, useState } from 'react';
import axios from "axios";
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import BestPublisherChart from "./Components/BestPublisherStats/BestPublisherChart"


function App() {
  
  const [games, setGames] = useState([]);
  

  useEffect(() => {
    getAllVideoGames();
  }, []);

  async function getAllVideoGames() {
    let response = await axios.get("https://localhost:7260/api/games/");
    setGames(response.data);
  }

  return (
    <div>
      <h3> Video Games  </h3>
      <SearchBar games = {games} setGames = {setGames} />
      <DisplayPlatformStats games={games} />
      <DisplayGames games={games} setGames = {setGames}/>
      <BestPublisherChart games = {games}/>
      
    </div>
  );
}

export default App;
