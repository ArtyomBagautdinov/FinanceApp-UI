import React from 'react';
import '../css/TopCircle.css';
class TopCircle extends React.Component{
    constructor(props){
        super();
        this.state = {
            fullName: props.fullName,
            shortName : props.shortName,
            value : props.value, 
            changePercent : props.changePercent,
            color : props.color
        }
    }

    render(){
        let circleStyle = {
            "background": this.state.color,
            "width" : this.state.value + 'px',
            "height" : this.state.value + 'px',
        }
        return (
           <div className="top-circle" style={circleStyle}>
               <div className="tip-circle__complany-name">{this.state.shortName}</div>
           </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
             fullName: nextProps.fullName,
            shortName : nextProps.shortName,
            value : nextProps.value, 
            changePercent : nextProps.changePercent,
            color : nextProps.color
        });  
      }
}

export default TopCircle