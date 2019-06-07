import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import cn from 'classnames';

const InviteModal = memo(({
  emailIsValid,
  nameIsValid,
  email,
  name,
  handleName,
  handleEmail,
  onSendInvite,
  ...props
}) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
          Invite to team
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
          Email
        <input
          onChange={handleEmail}
          value={email}
          className={cn('form-control', { 'is-invalid': !emailIsValid })}
          type="text"
        />
          Name
        <input
          onChange={handleName}
          value={name}
          className={cn('form-control', { 'is-invalid': !nameIsValid })}
          type="text"
        />
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="info" onClick={onSendInvite}>Send invitation</Button>
    </Modal.Footer>
  </Modal>
));

InviteModal.propTypes = {
  emailIsValid: PropTypes.bool,
  nameIsValid: PropTypes.bool,
  email: PropTypes.string,
  name: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  onSendInvite: PropTypes.func.isRequired,
};

InviteModal.defaultProps = {
  emailIsValid: true,
  nameIsValid: true,
  email: null,
  name: null,
};

export default InviteModal;
