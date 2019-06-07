import React, { PureComponent, Fragment } from 'react';
import alertify from 'alertifyjs';
import { connect } from 'react-redux';

import { clearSuccess, clearError } from '../../redux/actions';

import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

import Header from '../Header';
import InviteArea from '../InviteArea';
import TeamList from '../TeamList';

class Workspace extends PureComponent {
  componentDidMount() {
    const {
      error,
      success,
      clearSuccess: deleteSuccess,
      clearError: deleteError
    } = this.props;
    if (error) {
      alertify.error(`Error: ${error}`);
      deleteError();
    }
    if (success) {
      alertify.success(`${success}`);
      deleteSuccess();
    }
  }

  componentDidUpdate(prevProps) {
    const { error, success } = this.props;
    if (error && prevProps.error !== error) {
      alertify.error(`Error: ${error}`);
    }
    if (success && prevProps.success !== success) {
      alertify.success(`${success}`);
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <InviteArea />
        <TeamList />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  success: state.infoReducer.success,
  error: state.infoReducer.error
});

const mapDispatchToProps = {
  clearSuccess,
  clearError
};

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
