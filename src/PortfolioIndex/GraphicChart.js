import React from 'react';
import Chart from 'chart.js'
import '../css/IndexChart.css'
class GraphicChart extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [{
                x: 10,
                y: 20
            }, {
                x: 15,
                y: 10
            }]
        }
    }

    render(){
        return (
            <div className="chart__container">
                <canvas id="indexChart"></canvas>
            </div>
        )
    }

    componentDidMount(){
        const chartCanvas = document.getElementById('indexChart');
        let ctx = chartCanvas.getContext("2d");
        chartCanvas.width = 400;
        chartCanvas.height = 200;
        let indexData = {
            labels: ["2013", "2014", "2015", "2016", "2017"],
            datasets: [{
              backgroundColor : "rgba(247, 207, 155,0.1)",
              borderColor: "rgba(247, 207, 155,1)",
              label: "YOUR INDEX",
              data: [55, 48, 61, 55, 70],
            },
            {
                radius : 0,
                pointStyle: 'circle',
                borderDash: [15,10],
                backgroundColor : "rgba(234, 234, 0,0.1)",
                borderColor: "rgba(247, 207, 155,1)",
                label: "YOUR INDEX",
                data: [45, 42, 51, 45, 60],
              }]
          };
           
          let chartOptions = {
            legend: {
              display: false,
              position: 'bottom',
              labels: {
                fontColor: 'yellow'
              },
              scales: {
                xAxes: [{
                    
                }],
                yAxes: [{
                    gridLines: {
                        drawBorder: true,
                        display: false
                    }   
                }]
            }
            }
          };

        const lineChart = new Chart(ctx, {
            type: 'line',
            data: indexData,
            options: chartOptions
        });
        
        
    }
}


export default GraphicChart