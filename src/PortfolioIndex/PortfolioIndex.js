import React from 'react';
import IndexStats from './IndexStats.js';
import '../css/PortfolioIndex.css'
import IndexChart from './IndexChart.js';
class PortfolioIndex extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="portfolio-index__container">
                <IndexStats/>
                <IndexChart/>
            </div>
        )
    }
}

export default PortfolioIndex