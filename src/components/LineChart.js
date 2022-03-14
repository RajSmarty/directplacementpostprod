import React from 'react'
import { Line } from 'react-chartjs-2'


function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', "March", "May", "June"],
        datasets: [
          {
            label: "Sales for 2020 w",
            data: [3, 2, 1, 1, 5]
          }
        ]
      }
  return <Line data={data} />

}

export default LineChart
