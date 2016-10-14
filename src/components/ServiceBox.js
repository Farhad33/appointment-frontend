import React, { Component } from 'react'

class ServiceBox extends Component {
  render() {
    return (
      <div className="ServiceBox-wrapper">
        <div className="box-wrapper">
          <div className="box virus-removal">
            <a href="http://localhost:3000/schedule/virus-removal"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/virus-removal.png" /></a>
          </div>
          <div className="box">
            <a href="http://localhost:3000/schedule/Diagnostic-anf-repair"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/Diagnostic-anf-repair.png" /></a>
          </div>
          <div className="box">
            <a href="http://localhost:3000/schedule/printer-setup"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/printer-setup.png" /></a>
          </div>
          <div className="box">
            <a href="http://localhost:300/schedule/Electronic-setup"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/Electronic-setup.png" /></a>
          </div>
          <div className="box">
            <a href="http://localhost:300/schedule/PCTune-up"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/PC-Tune-up.png" /></a>
          </div>
          <div className="box">
            <a href="http://localhost:300/schedule/data-recovery"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/data-recovery.png" /></a>
          </div>
          <div className="box">
            <a href="http://localhost:300/schedule/WiFi-Solutions"><img src="https://www.myvfix.com/wp-content/uploads/2016/03/WiFi-Solutions.png" /></a>
          </div>
          </div>
      </div>
    );
  }
}

export default ServiceBox
