import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getUser } from "../actions";


const User = ({ getUser, match, user }) => {


  useEffect(() => {
    getUser(match.params.id);
  }, [getUser, match]);

  return <div>{user.name}</div>;
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch(getUser(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(User);
