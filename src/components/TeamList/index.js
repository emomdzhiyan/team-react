import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import { getUsers } from '../../redux/actions';

class TeamList extends PureComponent {
  componentDidMount() {
    const { getUsers: takeUsers } = this.props;
    takeUsers();
  }

  render() {
    const { team } = this.props;
    return (
      <div className="container mt-5">
        {
          team.length
            ? (
              <ListGroup>
                {
                  team.map(member => (
                    <ListGroup.Item key={member.id}>{member.name}</ListGroup.Item>
                  ))
                }
              </ListGroup>
            )
            : (
              <h3>
                No members in team!
              </h3>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.teamReducer.team,
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
