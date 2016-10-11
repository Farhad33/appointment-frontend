import React, { Component } from 'react';

class ServiceBox extends Component {
  componentWillMount() {
    const options = {
      mode: 'cors',

    }
    var url = `http://localhost:4000/services`
    fetch(url, options)
      .then(results => {
        console.log(results)
      })
  }
  render() {
    return (
      <div className="ServiceBox">
        <h1>wat</h1>

      </div>
    );
  }
}

export default ServiceBox
