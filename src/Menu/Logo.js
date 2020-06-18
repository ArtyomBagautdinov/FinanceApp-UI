import React from 'react';
import '../css/Menu.css';

class Logo extends React.Component{
    constructor(props){
        super();
        this.state = {
            idName : props.idName,
            src : props.src
        }
        
    }

    render(){
        return (
            <div className="menu__app-logo">
                    <div className="logo__iner">
                        <img src={this.state.src} />   
                    </div>       
            </div>
        )
    }
}

export default Logo