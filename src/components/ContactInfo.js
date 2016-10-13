import React from 'react';
import { Popover, Button, Tooltip, Modal, OverlayTrigger, tooltip, popover, FieldGroup, FormGroup, FormControl, ControlLabel, InputGroup  } from 'react-bootstrap'

const ContactInfo = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    )

  return (
    <div>
      <p>Click to get the full Modal experience!</p>

      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={this.open}
      >
        Launch demo modal
      </Button>

      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
 } 
});

const formInstance = (
  <form>
    <FormGroup>
      <FormControl className="form-style" type="text" placeholder="First Name" />
      <FormControl className="form-style" type="text" placeholder="Last Name" />
      <FormControl className="form-style" type="text" placeholder="Email" />
      <FormControl className="form-style" type="tel" placeholder="Phone Number" />
      <FormControl className="form-style" type="text" placeholder="Address" />
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>City</ControlLabel>
      <FormControl className="form-style item" componentClass="select" multiple>
        <option value="select">Alameda</option>
        <option value="other">blah</option>
        <option value="other">blah</option>
        <option value="other">blah</option>
        <option value="other">blah</option>
        <option value="other">blah</option>
      </FormControl>
        <FormControl className="form-style item" type="number" placeholder="Zip Code" />
      </FormGroup>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>State</ControlLabel>
        <FormControl className="form-style" componentClass="select" placeholder="select">
          <option value="select">California</option>
          <option value="other">...</option>
        </FormControl>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Description of the Problem</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
      </FormGroup>
  </form>
);



export default ContactInfo;