import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UsersList from './components/UsersList';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Link to='/users'>Users</Link>
          <Switch>
            <Route path='/users/:id' component={User} />
            <Route path='/users' component={UsersList} />
            <Route path='/'>
              <UsersList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
