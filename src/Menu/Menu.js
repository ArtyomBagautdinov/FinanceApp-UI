import React from 'react';
import MenuItem from './MenuItem.js';
import Logo from './Logo.js';
import '../css/Menu.css';
import chart from '../img/pie-chart.svg';
import home from '../img/home.svg';
import messages from '../img/messages.svg';
import logo from '../img/logo.svg';
import cloud from '../img/cloud.svg';
import params from '../img/settings.svg';

class Menu extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="menu">
                <div className="menu__container">
                <Logo src={logo}/>
                <div className="menu__navigation">
                    <MenuItem idName="item__home" src={home}/>
                    <MenuItem idName="item__messages" src={messages}/>
                    <MenuItem idName="item__chart" src={chart}/>
                    <MenuItem idName="item__cloud" src={cloud}/>
                    <MenuItem idName="item__params" src={params}/>
                </div>
            </div>
            </div>
        )
    }
}

export default Menu