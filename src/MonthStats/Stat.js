import React from 'react';
import '../css/Stat.css';

class Stat extends React.Component{
    constructor(props){
        super();
        this.state = {
            value : props.value
        }
    }

    render(){
        const heightParam = {
            height : (this.state.value*5.6).toString() + 'px'
        }
        return (
                <div className="stat__container">
                    <div className="stat__circle"></div>
                    <div className = "stat__bar" style={heightParam}></div>
                    <div className = "stat__value">{this.state.value}k</div>
                </div>
        )
    }
}

export default Stat