import React from 'react';
import Stock from './Stock.js';
import '../css/IndexStats.css';
class IndexStats extends React.Component{
    constructor(){
        super();
        this.state = {
            indexPercent : null,
            stocksData : [],
        }
    }

    render(){
        return (
            <div className="portfolio-index__stats">
                    <div className="stats-title">Portfolio Index</div>
                    <div className="stats-percent">
                        <div className="stats-percent__number">{this.state.indexPercent}</div>
                        <div className="stats-percent__sym">%</div>
                    </div>
                    <div className="stats-indexes">
                        {
                        this.state.stocksData.map(value => <Stock  stockName={value.stockName} 
                                                                    stockValue={value.stockValue} 
                                                                   stockChange={value.stockChange}/>)
                        }
                    </div>
            </div>
        )
    }

    componentDidMount(){

        this.setState({
            indexPercent : 18,
            stocksData : [
                {
                    stockName:'APPLE',
                    stockValue : 0.12,
                    stockChange : 0.13
                },
                {
                    stockName:"GOOGLE",
                    stockValue : 0.16,
                    stockChange : -0.06
                }
            ],
        })
    }
}

export default IndexStats


