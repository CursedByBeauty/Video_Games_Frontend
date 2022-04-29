import React, { useState } from 'react';

const SearchBar = ({setUserInput, userInput, handleSubmit}) => {


    return ( 
        <form onSubmit={(event)=>handleSubmit(event)}>
           
                
                <input value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
                <button type="submit" class="btn btn-primary">Search</button>
          
        </form>
     );
}
 
export default SearchBar;