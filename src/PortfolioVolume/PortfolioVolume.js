import React from 'react';
import '../css/PortfolioVolume.css';
import Circular from './Circular.js';
class PortfolioVolume extends React.Component{
    constructor(){
        super();
        this.state = {
            cash : 900,
            value : 488,
            month : "Jun 2019",
            marginTop : '0px',
            marginBottom : '0px',
        }
    }

    render(){
        return(
            <div className="portfolio-volume">
                <div className="portfolio-volume__container">

                    <div className="portfolio-volume__header">
                        <div className="header__title">Portfolio Volume</div>
                        <div className="header__month">{this.state.month}</div>
                    </div>

                    <Circular value={this.state.value} marginTop={this.state.marginTop} marginBottom={this.state.marginBottom} />

                    <div className="portfolio-volume__circular-value">
                        <div className="circular-value__cash">{this.state.cash}k</div>
                        <div className="circular-value__usd">usd</div>
                    </div>

                    <div className="portfolio-volume__tab-bar">
                        <div className="tab-bar__avg" onClick={this.avgAddViolet.bind(this)}>Avg 8%</div>
                        <div className="tab-bar__you" onClick={this.youAddViolet.bind(this)}>You 15%</div>
                        <div className="tab-bar__ai" onClick={this.aiAddViolet.bind(this)}>A.I 19%</div>
                    </div>
                </div>
            </div>
        )
    }

    avgAddViolet(){
        const div = document.getElementsByClassName('tab-bar__avg')[0];
        div.classList.add('violet');
        document.getElementsByClassName('tab-bar__you')[0].classList.remove('violet');
        document.getElementsByClassName('tab-bar__ai')[0].classList.remove('violet');
        this.setState({
            value : 100,
            cash : 750,
            marginTop : '-200px',
            marginBottom : '-200px',
        });
       
    }

    youAddViolet(){
        const div = document.getElementsByClassName('tab-bar__you')[0];
        div.classList.add('violet');
        document.getElementsByClassName('tab-bar__avg')[0].classList.remove('violet');
        document.getElementsByClassName('tab-bar__ai')[0].classList.remove('violet');
        this.setState({
            value : 488,
            cash : 900,
            marginTop : '0px',
            marginBottom : '0px',
        });
        
    }

    aiAddViolet(){
        const div = document.getElementsByClassName('tab-bar__ai')[0];
        div.classList.add('violet');
        document.getElementsByClassName('tab-bar__you')[0].classList.remove('violet');
        document.getElementsByClassName('tab-bar__avg')[0].classList.remove('violet');
        this.setState({
            value : 300,
            cash : 990,
            marginTop : '200px',
            marginBottom : '200px',
        });
    }
}

export default PortfolioVolume