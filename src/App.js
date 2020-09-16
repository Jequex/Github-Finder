import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    loading : false,
    users : [],
  }

  async componentDidMount(){
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.USER_FINDER_APP_CLIENT_ID}
    &client_secret=${process.env.USER_FINDER_APP_CLIENT_SECRET}`);

    this.setState({users: res.data, loading: false});
  }

  render(){
    return(
      <div className="App container">
        <Navbar />
        <Search />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    )
  }
}

export default App;
