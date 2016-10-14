import React, { Component } from 'react';
import ServiceBox from './ServiceBox';
import ContactInfo from './ContactInfo';
import Progress_bar from '../Progress_bar'

class Services extends Component {
  render() {
    return (
      <div className="Services">
      <Progress_bar blue="#3399CC" orange="orange"/>
        <ServiceBox />
        <ContactInfo />
      </div>
    );
  }
}

export default Services
