import React from 'react';
import '../css/Stock.css'
class Stock extends React.Component{
    constructor(props){
        super();
        this.state = {
            stockName : props.stockName,
            stockValue : props.stockValue,
            stockChange : props.stockChange,
        }
    }

    render(){
        return (
           <div className="stock__container">
               <div className="stock__stockName">{this.state.stockName}</div>
               <div className="stock__info-block">
                   <div className="stock__value">{this.state.stockValue}</div>
                   <div className={this.state.stockChange>0 ? "stock__change s-green" : "stock__change s-red"}>({this.state.stockChange})</div>
                   <div className={this.state.stockChange > 0 ?"stock__green"  : "stock__red"}></div>
               </div>
               <div className="bottom-line"></div>
           </div>
        )
    }
}

export default Stock

