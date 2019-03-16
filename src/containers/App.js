import React, { Component } from 'react';
import classes from './App.css'
import TextPanel from '../conponents/textPanel/textPanel';
import StyleController from '../conponents/styleController/styleController';
class App extends Component {
  render() {
    return (
     <div className={classes.App}>
       <TextPanel />
       <StyleController />
     </div>
    );
  }
}

export default App;
