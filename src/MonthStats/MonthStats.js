import React from 'react';
import Stat from './Stat.js';
import Pie from '../img/pie-chart.svg';
import '../css/MonthStats.css';
class MonthStats extends React.Component{
    constructor(){
        super();
        this.state = {
            values : [],
            valueTotal : null
        }
    }

    render(){
        return (
                <div className="month-stats">
                        <div className="month-stats__container">
                            <div className="month-stats__header">
                                <div className="header__num"> {this.state.values.length} months stats</div>
                                <div className="header__icon">
                                    <img src={Pie}/>
                                </div>
                            </div>
                            <div className="month-stats__value">
                                <div className="value__dollar">$</div>
                                <div className="value__num">{this.state.valueTotal - 0.3 + 0.675}</div>
                            </div>
                            <div className="month-stats__chart">
                                {this.state.values.map(val => <Stat value={val}/>)}
                            </div>
                            <div className="month-stats__info-block">
                                <div className="info-block__text">
                                    <div className="text__title">Investment Insingts</div>
                                    <div className="text__description">Advices by our Prediction A.I.</div>
                                </div>
                                <div className="info-block__button">Learn More</div>
                            </div>  
                        </div>           
                </div>
        )
    }

    componentDidMount(){
        const newValues = [9.2, 19.1, 13, 15.8, 24, 9.2];
        let sum = 0;
        for(let i = 0 ; i< newValues.length;i++)
            sum += newValues[i];

        this.setState({
            values: newValues,
            valueTotal : sum
        })

    }
}

export default MonthStats