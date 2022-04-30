import React, { useState} from 'react';
import { Chart } from "react-google-charts";
const BestPublisherChart = (props) => {
  const [title, setTitle] = useState({
    title: "Best Selling Publishers since 2017",
    vAxis: {minValue: 0},
    colors: ['green']

  })
  let filteredPublishers = props.games.filter((game) => {
    if (game.year >= 2017)
      return true
  }) 
  let publishers = filteredPublishers.map((element) => {
    return [element.publisher,element.globalSales,0]
  })




  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={[["Publishers", "Sales(per millions)", { role: "style" }], ...publishers]}
      options = {title} />

  )
}


export default BestPublisherChart;