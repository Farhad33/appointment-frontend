import React, { Component } from 'react';
import ServiceBox from './ServiceBox';
import ContactInfo from './ContactInfo';

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <ServiceBox />
        <ContactInfo />
      </div>
    );
  }
}

export default Services
