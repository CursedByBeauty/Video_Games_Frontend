import React, { useEffect, useState } from 'react';
import axios from "axios";
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayGames from './Components/DisplayGames/DisplayGames';



function App() {
  
  const [games, setGames] = useState([]);
  

  useEffect(() => {
    getAllVideoGames();
    console.log("useEfect");
  }, []);

  async function getAllVideoGames() {
    let response = await axios.get("https://localhost:7260/api/games/");
    setGames(response.data);
  }

  async function getByName(name) {
    try {
      let response = await axios.get(
        `https://localhost:7260/api/games/Name/${name}`
      );
      console.log(response.data);
      setGames(response.data);
    } catch (error) {
      
    }
  }

  



  return (
    <div>
      <h3> Video Games  </h3>
      <SearchBar games = {games} setGames = {setGames} />
      <DisplayGames games={games} />
      <DisplayPlatformStats games={games} getname={getByName} />
      
    </div>
  );
}

export default App;
