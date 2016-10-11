import React, { Component } from 'react';
import { Link } from 'react-router'

class ServiceBox extends Component {
  // componentWillMount() {
  //   const options = {
  //     mode: 'cors',
  //
  //   }
  //   var url = `http://localhost:4000/services`
  //   fetch(url, options)
  //     .then(results => {
  //       console.log(results)
  //     })
  // }
  render() {
    return (
      <div className="ServiceBox-wrapper">
        <div className="box-wrapper">
          <div className="box">
            <h1>wat</h1>
            <Link to="/schedule/wifi-solutions">Wifi Solutions</Link>
          </div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
          <div className="box"><h1>wat</h1></div>
        </div>
      </div>
    );
  }
}

export default ServiceBox
