import React from 'react';
import Menu from './Menu/Menu.js';
import Widgets from './Widgets.js';
import './css/App.css';
function App() {
  return (
    <div className="app__container">
      <Menu/>
      <Widgets/>
    </div>
  );
}

export default App;
