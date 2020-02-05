import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../actions';

const UsersList = props => {
  const { users, getUsersList } = props;

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div>
      {users.length
        ? users.map(item => {
            return (
              <div key={item.id}>
                <Link to={`/users/${item.id}`}>{item.name}</Link>
              </div>
            );
          })
        : 'Loading ...'}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.usersList,
  };
};

const mapDispatchToProps = dispatch => ({
  getUsersList: () => dispatch(getUsers()),
});

UsersList.defaultProps = {
  getUsersList: () => null,
  users: [],
};

UsersList.propTypes = {
  getUsersList: PropTypes.func,
  users: PropTypes.arrayOf,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
