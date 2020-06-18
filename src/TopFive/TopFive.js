import React from 'react';
import '../css/TopFive.css';
import settings from '../img/settings.svg';
import TopCircle from './TopCircle';
class TopFive extends React.Component{
    constructor(){
        super();
        this.state = {
           values : [],
           topActiveName : "",
           topActivePercent : null
        }
    }

    render(){
        return (
            <div className="top-five">
                <div className="top-five__container">
                    <div className="top-five__header">
                        <div className="header__title">Top 5 Assets</div>
                        <div className="header__image"><img src={settings}/></div>
                    </div>
                    <div className="top-five__top-active">
                        <div className="top-active__name">{this.state.topActiveName}</div>
                        <div className={this.state.topActivePercent > 0 ? "top-active__changePercent ta-green" : "top-active__changePercent ta-red"}>{this.state.topActivePercent>0 ? "+" + this.state.topActivePercent :this.state.topActivePercent }%</div>
                    </div>
                    <div className="top-five__circles-container">
                        {this.state.values.map(val => <TopCircle fullName={val.fullName} shortName={val.shortName}  value={val.value} changePercent={val.changePercent} color={val.color} />)}
                    </div>
                    <div className="top-five__time-params">
                        <div className="time-params__day gray" onClick={this.clickDay.bind(this)}>1d</div>
                        <div className="time-params__week gray" onClick={this.clickWeek.bind(this)}>1w</div>
                        <div className="time-params__month gray" onClick={this.clickMonth.bind(this)}>1m</div>
                        <div className="time-params__year gray" onClick={this.clickYear.bind(this)}>1y</div>
                    </div>
                </div>
            </div>
        )
    }

    useData(data){
        let max = -1000000;
            let name = "";
            let topPercent = null;
    
            for(let i=0;i<data.length;i++){
                if(data[i].value>max){
                    max = data[i].value;
                    name = data[i].fullName;
                    topPercent = data[i].changePercent;
                }
            }

            this.setState({
                values : data,
                topActiveName : name,
                topActivePercent : topPercent
            })
    }

    componentDidMount(){
            let data = [
                    {fullName: "Google Inc. (GOOG)",shortName : "GOOG",value : 70,changePercent : -1.2 , color: "linear-gradient(184deg, rgba(104,201,255,1) 0%, rgba(101,93,255,1) 50%, rgba(76,82,254,1) 100%)"},
                    {fullName: "Apple Inc. (APPL)",shortName : "APPL",value : 90, changePercent : 1.64 , color: "linear-gradient(184deg, rgba(255,159,104,1) 0%, rgba(254,196,89,1) 47%, rgba(254,228,76,1) 100%)"},
                    {fullName: "Hewlet Packard Inc. (HP)",shortName : "HP",value : 40,changePercent : 3.54, color: "linear-gradient(184deg, rgba(104,255,106,1) 0%, rgba(0,158,21,1) 100%)"},
                    {fullName: "Tesla Motor Company. (TSLA)",shortName : "TSLA",value : 80,changePercent : 10.5, color: "linear-gradient(184deg, rgba(255,104,201,1) 0%, rgba(199,44,105,1) 50%, rgba(158,0,35,1) 100%)"}
                ];
              
            this.useData(data);    

            const div = document.getElementsByClassName('time-params__day')[0];
            div.classList.remove('gray');
            const divW = document.getElementsByClassName('time-params__week')[0];
            const divM = document.getElementsByClassName('time-params__month')[0];
            const divY = document.getElementsByClassName('time-params__year')[0];
            divW.classList.add('gray');
            divM.classList.add('gray');
            divY.classList.add('gray');
    }

    clickDay(){
        let data = [
            {fullName: "Google Inc. (GOOG)",shortName : "GOOG",value : 70,changePercent : -1.2 , color: "linear-gradient(184deg, rgba(104,201,255,1) 0%, rgba(101,93,255,1) 50%, rgba(76,82,254,1) 100%)"},
            {fullName: "Apple Inc. (APPL)",shortName : "APPL",value : 90, changePercent : 1.64 , color: "linear-gradient(184deg, rgba(255,159,104,1) 0%, rgba(254,196,89,1) 47%, rgba(254,228,76,1) 100%)"},
            {fullName: "Hewlet Packard Inc. (HP)",shortName : "HP",value : 40,changePercent : 3.54, color: "linear-gradient(184deg, rgba(104,255,106,1) 0%, rgba(0,158,21,1) 100%)"},
            {fullName: "Tesla Motor Company. (TSLA)",shortName : "TSLA",value : 80,changePercent : 10.5, color: "linear-gradient(184deg, rgba(255,104,201,1) 0%, rgba(199,44,105,1) 50%, rgba(158,0,35,1) 100%)"}
        ];
      
        this.useData(data);    

        const div = document.getElementsByClassName('time-params__day')[0];
        div.classList.remove('gray');
        const divW = document.getElementsByClassName('time-params__week')[0];
        const divM = document.getElementsByClassName('time-params__month')[0];
        const divY = document.getElementsByClassName('time-params__year')[0];
        divW.classList.add('gray');
        divM.classList.add('gray');
        divY.classList.add('gray');
    }

    clickWeek(){
        let data = [
            {fullName: "Google Inc. (GOOG)",shortName : "GOOG",value : 90,changePercent : -1.2 , color: "linear-gradient(184deg, rgba(255,159,104,1) 0%, rgba(254,196,89,1) 47%, rgba(254,228,76,1) 100%)"},
            {fullName: "Apple Inc. (APPL)",shortName : "APPL",value : 70, changePercent : 1.64 , color: "linear-gradient(184deg, rgba(104,201,255,1) 0%, rgba(101,93,255,1) 50%, rgba(76,82,254,1) 100%)"},
            {fullName: "Hewlet Packard Inc. (HP)",shortName : "HP",value : 80,changePercent : 3.54, color: "linear-gradient(184deg, rgba(104,255,106,1) 0%, rgba(0,158,21,1) 100%)"},
            {fullName: "Tesla Motor Company. (TSLA)",shortName : "TSLA",value :60,changePercent : 10.5, color: "linear-gradient(184deg, rgba(255,104,201,1) 0%, rgba(199,44,105,1) 50%, rgba(158,0,35,1) 100%)"}
        ];

        this.useData(data);  
        const div = document.getElementsByClassName('time-params__week')[0];
        div.classList.remove('gray');
        const divD = document.getElementsByClassName('time-params__day')[0];
        const divM = document.getElementsByClassName('time-params__month')[0];
        const divY = document.getElementsByClassName('time-params__year')[0];
        divD.classList.add('gray');
        divM.classList.add('gray');
        divY.classList.add('gray');
    }

    clickMonth(){
        let data = [
            {fullName: "Google Inc. (GOOG)",shortName : "GOOG",value : 65,changePercent : -1.2 , color: "linear-gradient(184deg, rgba(104,201,255,1) 0%, rgba(101,93,255,1) 50%, rgba(76,82,254,1) 100%)"},
            {fullName: "Apple Inc. (APPL)",shortName : "APPL",value : 60, changePercent : 1.64 , color: "linear-gradient(184deg, rgba(255,159,104,1) 0%, rgba(254,196,89,1) 47%, rgba(254,228,76,1) 100%)"},
            {fullName: "Hewlet Packard Inc. (HP)",shortName : "HP",value : 79,changePercent : 3.54, color: "linear-gradient(184deg, rgba(104,255,106,1) 0%, rgba(0,158,21,1) 100%)"},
            {fullName: "Tesla Motor Company. (TSLA)",shortName : "TSLA",value :90,changePercent : 10.5, color: "linear-gradient(184deg, rgba(255,104,201,1) 0%, rgba(199,44,105,1) 50%, rgba(158,0,35,1) 100%)"}
        ];

        this.useData(data); 
        const div = document.getElementsByClassName('time-params__month')[0];
        div.classList.remove('gray');
        const divW = document.getElementsByClassName('time-params__week')[0];
        const divD = document.getElementsByClassName('time-params__day')[0];
        const divY = document.getElementsByClassName('time-params__year')[0];
        divW.classList.add('gray');
        divD.classList.add('gray');
        divY.classList.add('gray');
    }

    clickYear(){
        let data = [
            {fullName: "Google Inc. (GOOG)",shortName : "GOOG",value : 55,changePercent : -1.2 , color: "linear-gradient(184deg, rgba(104,201,255,1) 0%, rgba(101,93,255,1) 50%, rgba(76,82,254,1) 100%)"},
            {fullName: "Apple Inc. (APPL)",shortName : "APPL",value : 60, changePercent : 1.64 , color: "linear-gradient(184deg, rgba(255,159,104,1) 0%, rgba(254,196,89,1) 47%, rgba(254,228,76,1) 100%)"},
            {fullName: "Hewlet Packard Inc. (HP)",shortName : "HP",value :90,changePercent : 3.54, color: "linear-gradient(184deg, rgba(255,104,201,1) 0%, rgba(199,44,105,1) 50%, rgba(158,0,35,1) 100%)"},
            {fullName: "Tesla Motor Company. (TSLA)",shortName : "TSLA",value :70,changePercent : 23.5, color: "linear-gradient(184deg, rgba(104,255,106,1) 0%, rgba(0,158,21,1) 100%)"}
        ];

        this.useData(data); 
        const div = document.getElementsByClassName('time-params__year')[0];
        div.classList.remove('gray');
        const divW = document.getElementsByClassName('time-params__week')[0];
        const divM = document.getElementsByClassName('time-params__month')[0];
        const divD = document.getElementsByClassName('time-params__day')[0];
        divW.classList.add('gray');
        divM.classList.add('gray');
        divD.classList.add('gray');
    }
}

export default TopFive