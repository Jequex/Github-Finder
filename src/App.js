import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About';
import Errors from './pages/Errors';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
  state = {
    loading : false,
    user: {},
    users : [],
    alert: null
  }

  setAlert = (text, color) => {
    this.setState({alert: {text: text, type: color}})
    setTimeout(() => this.setState({alert: null}), 2000);
  }

  searchUsers = async (text) => {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.USER_FINDER_APP_CLIENT_ID}
    &client_secret=${process.env.USER_FINDER_APP_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading: false});
  }

  getUser = async (username) => {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.USER_FINDER_APP_CLIENT_ID}
    &client_secret=${process.env.USER_FINDER_APP_CLIENT_SECRET}`);

    this.setState({user: res.data, loading: false});
  }

  clearUsers = () => {
    this.setState({users: [], loading: false})
  }

  render(){

    const {loading, users, alert, user} = this.state;

    return(
      <Router>
        <div className="App container">
          <Navbar />
          <Alert alert={alert}/>
          <Switch>
            <Route exact path="/" render={
              props => (
                <Fragment>
                  <Search 
                  searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}/>
                  <Users loading={loading} users={this.state.users} />
                </Fragment>
              )
            }/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" render={
              props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading}/>
              )
            }/>
            <Route component={Errors}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
