import React, { useEffect, useState } from 'react';
import axios from "axios";
import DisplayPlatformStats from './Components/DisplayPlatformStats/DisplayPlatformStats';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayGames from './Components/DisplayGames/DisplayGames';



function App() {
  
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

  const handleSubmit = (event) => {
    event.preventDefault()
    let filteredGames = games.filter((game)=>{
      if(game.name.includes(userInput)) return true
    })
    setGames(filteredGames)
  };



  return (
    <div>
      <h3> Video Games  </h3>
      <SearchBar setUserInput={setUserInput} userInput={userInput} handleSubmit = {handleSubmit}/>
      <DisplayGames games={games} userInput={userInput} />
      <DisplayPlatformStats games={games} getname={getByName} />
      
    </div>
  );
}

export default App;
