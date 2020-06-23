import React from 'react';
import '../css/IndexChart.css';
import '../css/ChartLegend.css';
class ChartLegend extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
           <div className="chart__legend-block">
               <div className="legent-block__portfolio">
                   <div className="portfolio__line"></div>
                   <div className="portfolio__title">Your portfolio</div>
               </div>
               <div className="legent-block__median">
                   <div className="median__line"></div>
                   <div className="median__title">Your portfolio</div>
               </div>
           </div>
        )
    }
}

export default ChartLegend