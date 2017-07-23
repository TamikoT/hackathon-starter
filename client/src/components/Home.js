import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import ChatWindow from './ChatWindow';
import { Field, reduxForm } from 'redux-form';

class Home extends Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      username: '',
      code: '',
      isLoggedIn: false
    };
  }

  handleOnClick(event){
    event.preventDefault();
    console.log('user clicked `enter` button');
    console.log(this.state.username);
    console.log(this.state.code);

    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username
      })
    }).then(function(response) { return response.json(); } )
      .catch(function(err) { "something went wrong"; });

    // redirect to '/chat'
    // window.location.replace('/chat');


    // action to create a new user
    this.props.newUser(this.state.username);

    // reset username and room code
    this.setState({ username: '', code: ''});

    this.setState({isLoggedIn: true});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        { isLoggedIn ? (
          <section className="home-component">
            <p className="console-log">inside home</p>
            <h2>Welcome to Muviato!</h2>
            <ul>
              <li>
                <label>your sweet username: </label>
                <input type="text" placeholder="make a username" value={ this.state.username }
           onChange={(e) => this.setState({ username: e.target.value })} id="username" />
              </li>
              <li>
                <label>the secret code, please: </label>
                <input type="text" placeholder="room code" value={ this.state.code }
           onChange={(e) => this.setState({ code: e.target.value })} id="roomCode" />
                <button onClick={ this.handleOnClick }>Enter</button>
              </li>
            </ul>
            <div>
              <Link to='/host'>create a new room</Link>
            </div>
          </section>
        ) : (
          <p>User is logged in!</p>
        ) }
      <div>
    )
  }
}

function mapStateToProps(state){
  return { user: state.user }
}

function mapDispatchToProps(dispatch){
 return {
   newUser: (user) => {
    dispatch(userActions.newUser(user))
  }
 }
}

export default connect(null, mapDispatchToProps)(Home);
