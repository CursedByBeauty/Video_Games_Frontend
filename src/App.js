import React, { useState } from 'react';
import EntriesChart from './Components/EntriesChart/EntriesChart';


function App() {

  const [entries, setEntries] = useState()


  return (
    <div>
      <h3> Video Games  </h3>
      <EntriesChart />
    </div>
  );
}

export default App;
