import React, { Fragment, PureComponent } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import loader from '../../images/loading-img.gif';

import Header from '../Header';
import { activateUser } from '../../redux/actions';

class Invitation extends PureComponent {
  componentDidMount() {
    const { activateUser: sendActivation, match: { params: { token } } } = this.props;
    sendActivation(token);
  }

  render() {
    const { redirect } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="d-flex justify-content-center">
          <img alt="loader" className="post-loader" src={loader} />
          {redirect && <Redirect to="/" />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.infoReducer.redirection
});

const mapDispatchToProps = {
  activateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
