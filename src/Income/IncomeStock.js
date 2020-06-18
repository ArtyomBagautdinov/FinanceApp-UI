import React from 'react';
import '../css/IncomeStock.css';
class IncomeStock extends React.Component{
    constructor(props){
        super();
        this.state = {
            name : props.name,
            profit :props.profit,
            percentChange :props.percentChange,
            image : props.image
        }
    }

    render(){
        return (
            <div className="income-stock__container">
                <div className="income-stock__logo-name-block">
                <div className="income-stock-logo">
                    <img src={this.state.image}/>
                </div>
                <div className="income-stock-name">{this.state.name}</div>
                </div>
                <div className="income-stock-info">
                <div className="income-stock-info__profit">{this.state.profit>0 ? "+$" : "-$"}{this.state.profit}</div>
                    <div className={this.state.percentChange>0 ? "income-stock-info__percent-change green" : "income-stock-info__percent-change red"}>{this.state.percentChange}%</div>
                </div>
            </div>
        )
    }
}

export default IncomeStock