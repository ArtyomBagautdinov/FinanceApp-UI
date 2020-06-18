import React from 'react';
import IncomeStock from './IncomeStock.js';
import settings from '../img/settings.svg';
import '../css/Income.css';

class Income extends React.Component{
    constructor(){
        super();
        this.state = {
            values : [],
            summary : null
        }
    }

    render(){
        return (
            <div className="income">
                <div className="income__container">
                    <div className="income__header">
                        <div className="header__title">Income</div>
                        <div className="header__image"><img src={settings}/></div>
                    </div>
                    <div className="income__income-stocks-container">
                            {this.state.values.map( val=> <IncomeStock name={val.name} profit={val.profit} percentChange={val.percentChange} image={val.image}/>)}
                    </div>
                    <div className="income__summary">
                        <div className="summary__title">
                            <p>Summary</p>
                        </div>
                        <div className="summary__button">
                            <p>${this.state.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let newValues = [{
            name : "Apple (APPL)",
            profit : 830,
            percentChange : 1.1,
            image : "https://image.flaticon.com/icons/svg/1532/1532495.svg"
        },
        {
            name : "Hewlett Pacard",
            profit : 415,
            percentChange : 0.6,
            image : "https://image.flaticon.com/icons/svg/882/882851.svg"
        },
        {
            name : "Google",
            profit : 130,
            percentChange : -0.2,
            image : "https://image.flaticon.com/icons/svg/2991/2991148.svg"
        }
        ];

        let sum =0;

        for(let i = 0;i< newValues.length;i++){
            sum += newValues[i].profit;
        }

        this.setState({
            values : newValues,
            summary : sum
        });

    }
}

export default Income