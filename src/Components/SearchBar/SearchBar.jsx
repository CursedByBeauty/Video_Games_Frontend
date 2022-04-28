import React, { useState } from 'react';

const SearchBar = ({getUserInput, userInput}) => {


    return ( 
        <form>
            <div>
                
                <input value={userInput} onChange={(event) => getUserInput(event)}/>
                <button type="search" class="btn btn-primary">Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;