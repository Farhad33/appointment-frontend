import React, { Component } from 'react';
import './App.css'

class Progress_bar extends Component {

  render() {
    return (
      <div className="Progress_bar">
        <div id="progressBarContainer">
          <div className="statusBar statusBar1stChild">Select a service</div>
          <div className="triangle-right"><div className="triangle-right-border-container"><div className="triangle-right-border"></div></div></div>
          <div className="statusBar">Pick a time</div>
          <div className="triangle-right"><div id="triangle-right-border-container"><div className="triangle-right-border"></div></div></div>
          <div className="statusBar">Personal info</div>
          <div className="triangle-right"><div className="triangle-right-border-container"><div className="triangle-right-border"></div></div></div>
        </div>
          <div className="statusBar" id="statusBar-LastChild">Confirmation</div>
          <div className="triangle-right" id="triangle-LastChild"><div className="triangle-right-border"></div></div>
      </div>
    );
  }
}

export default Progress_bar
