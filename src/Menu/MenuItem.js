import React from 'react';
import '../css/Menu.css';

class MenuItem extends React.Component{
    constructor(props){
        super();
        this.state = {
            idName : props.idName,
            src : props.src
        }
        
    }

    render(){
        return (
            <div className="navigation-item__container" id={this.state.idName}>
                    <img src={this.state.src} />          
            </div>
        )
    }
}

export default MenuItem