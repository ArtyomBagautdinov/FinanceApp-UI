import React from 'react';
import './css/Widgets.css';

import PortfolioIndex from './PortfolioIndex/PortfolioIndex.js'
import MonthStats from './MonthStats/MonthStats.js';
import Income from './Income/Income';
import PortfolioVolume from './PortfolioVolume/PortfolioVolume';
import TopFive from './TopFive/TopFive';
class Widgets extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="widgets__container">
                <PortfolioIndex/>
                <MonthStats/>
                <Income/>
                <PortfolioVolume/>
                <TopFive/>
            </div>
        )
    }
}

export default Widgets