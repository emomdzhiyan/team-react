import React, { PureComponent } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import InviteModal from '../InviteModal';
import { sendInvite } from '../../redux/actions';

class InviteArea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: '',
      name: '',
      emailIsValid: true,
      nameIsValid: true,
    };
  }

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({
    showModal: false,
    email: '',
    name: '',
    emailIsValid: true,
    nameIsValid: true
  });

  handleEmail = (e) => {
    const trimmedText = e.target.value.trim();
    const text = trimmedText && e.target.value;
    this.setState({
      email: text,
      emailIsValid: true
    });
  };

  handleName = (e) => {
    const trimmedText = e.target.value.trim();
    const text = trimmedText && e.target.value;
    this.setState({
      name: text,
      nameIsValid: true
    });
  };

  onSendInvite = () => {
    const { email, name } = this.state;
    const { sendInvite: sendMessage } = this.props;
    if (email && name) {
      this.closeModal();
      this.setState({
        emailIsValid: true,
        nameIsValid: true,
        email: '',
        name: ''
      });
      sendMessage({
        email,
        name
      });
    } else {
      if (!email) this.setState({ emailIsValid: false });
      if (!name) this.setState({ nameIsValid: false });
    }
  };

  render() {
    const {
      showModal,
      email,
      name,
      emailIsValid,
      nameIsValid
    } = this.state;
    return (
      <div className="container mt-5">
        <ButtonToolbar>
          <Button
            variant="success"
            onClick={this.openModal}
          >
            Add to team
          </Button>

          <InviteModal
            show={showModal}
            onHide={this.closeModal}
            email={email}
            name={name}
            emailIsValid={emailIsValid}
            nameIsValid={nameIsValid}
            handleEmail={this.handleEmail}
            handleName={this.handleName}
            onSendInvite={this.onSendInvite}
          />
        </ButtonToolbar>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sendInvite
};

export default connect(null, mapDispatchToProps)(InviteArea);
