import React from 'react';
import '../css/IndexChart.css'
import GraphicChart from './GraphicChart.js';
import ChartLegend from './ChartLegend.js'
class IndexChart extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="portfolio-index__chart">
                <GraphicChart/>
                <ChartLegend/>
            </div>
        )
    }
}

export default IndexChart