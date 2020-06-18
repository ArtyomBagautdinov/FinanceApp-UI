import React from 'react';
import ChartLegend from './ChartLegend.js';
import '../css/IndexChart.css'
import GraphicChart from './GraphicChart';
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