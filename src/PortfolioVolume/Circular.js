import React from 'react';
import '../css/Circular.css';
class Circular extends React.Component{
    constructor(props){
        super();
        this.state = {
            value : props.value,
            marginTop : props.marginTop,
            marginBottom : props.marginBottom
        }
    }

    render(){
        let circleParams = {
            "stroke-dashoffset" : this.state.value
        }  
        
        let left= {
            "margin-top" : this.state.marginTop
        } 

        let right = {
            "margin-bottom" : this.state.marginBottom
        } 
        return(
            
            <div className="portfolio-volume__circular-container">
                <div className="circular-container__little-circle" style={left}></div>
                    <svg>
                        <circle cx="135" cy="130" r="100"></circle>
                        <circle style={circleParams} cx="135" cy="130" r="100"></circle>
                    </svg>
                <div className="circular-container__little-circle" style={right}></div>
            </div>
               
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value : nextProps.value,
            percent : nextProps.percent,
            marginTop : nextProps.marginTop,
            marginBottom : nextProps.marginBottom
        });  
      }

   
}

export default Circular