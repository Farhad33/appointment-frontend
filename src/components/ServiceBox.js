import React, { Component } from 'react'

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
            <img src="https://www.myvfix.com/wp-content/uploads/2016/03/virus-removal.png" />
          </div>
          <div className="box">
            <img src="https://www.myvfix.com/wp-content/uploads/2016/03/Diagnostic-anf-repair.png" />
          </div>
          <div className="box">
            <img src="https://www.myvfix.com/wp-content/uploads/2016/03/printer-setup.png" />
          </div>
          <div className="box">
            <img src="https://www.myvfix.com/wp-content/uploads/2016/03/Electronic-setup.png" />
          </div>
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
