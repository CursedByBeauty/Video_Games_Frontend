import { Chart } from 'react-google-charts'

import React from 'react';
const GamePerConsoleChart = (props) => {
    
    return (
        <Chart chartType="ColumnChart" width=
            '100%' height='400px' data ={props.singleGame}/>
    );
}
export default GamePerConsoleChart
