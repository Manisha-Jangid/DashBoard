import React, { Component } from 'react';
import SideNav from './Component/SideNav/SideNav' ;
//import Logo from './Component/Logo/Logo';
import Horizontalnav from './Component/HorizontalNav/HorizontalNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidenav"><SideNav /></div>
    <div className='horizontalnav'><Horizontalnav/></div>
        </div>
    );
  }
}

export default App;
