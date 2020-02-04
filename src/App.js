import React, {useEffect} from 'react';
import { connect } from "react-redux";
import './App.css';
import { getUsers } from './actions'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UsersList from './components/UsersList';
import User from './components/User'

function App({getUsers, users}) {

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/users">Users</Link>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/users/:id" component={User}/>
            <Route path="/users">
              <UsersList users ={users}/>
            </Route>
            <Route path="/">
              <UsersList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}



const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.usersList
  };
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
