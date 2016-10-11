import React, { Component } from 'react'
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'
import Select from 'muicss/lib/react/select'
import Option from 'muicss/lib/react/option'

class ContactInfo extends Component {
  render() { 
    return <div className="contact-container">
        <Form>
          <legend>Contact Info</legend>
          <Input label="First Name" required={true} />
          <Input label="Last Name" required={true} />
          <Input label="Address" type="text" floatingLabel={true} required={true} />
          <Select defaultValue="City">
            <Option value="oakland" label="Oakland" />
            <Option value="san-francisco" label="San Francisco" />
            <Option value="berkeley" label="Berkeley" />
            <Option value="daly-city" label="Daly City" />
          </Select>
          <Select defaultValue="State">
            <Option value="california" label="California" />
            <Option value="nevada" label="Nevada" />
            <Option value="washington" label="Washington" />
            <Option value="oregon" label="Oregon" />
          </Select>
          <Input label="Zip Code" type="tel" floatingLabel={true} required={true} />
          <Input label="Phone Number" type="tel" floatingLabel={true} required={true} />
          <Input label="Required Email Address" type="email" floatingLabel={true} required={true} />
          <Input label="Password" type="password" floatingLabel={true} required={true} />
          <Button variant="raised">Submit</Button>
        </Form>
      </div>
  }
}

export default ContactInfo 