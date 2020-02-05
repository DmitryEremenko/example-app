import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions';

const User = ({ getUserData, match, user }) => {
  useEffect(() => {
    getUserData(match.params.id);
  }, [getUserData, match]);

  return <div>{user.name}</div>;
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({
  getUserData: id => dispatch(getUser(id)),
});

User.defaultProps = {
  getUserData: null,
  match: {},
  user: {},
};

User.propTypes = {
  getUserData: PropTypes.func,
  match: PropTypes.objectOf,
  user: PropTypes.objectOf,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
