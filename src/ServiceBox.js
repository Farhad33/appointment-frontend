import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router'
=======
import './App.css'
>>>>>>> f8a5a052f4e05f2b642f0eb8f8ff84850863ffe1

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
