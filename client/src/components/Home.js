import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions'

class Home extends Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      username: '',
      code: ''
    };
  }

  handleOnClick(event){
    event.preventDefault();
    // console.log('user clicked `enter` button');
    // console.log(this.state.username);
    // console.log(this.state.code);

    fetch('http://localhost:3001/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username
      })
    }).then(function(response) { return response.json(); } )
      .catch(function(err) { "something went wrong"; });

    // action to create a new user
    this.props.newUser(this.state.username);

    // add user to a room
    this.setState({ username: '', code: ''});

    // redirect to '/chat'
    window.location.replace('/chat');
  }

  render() {
    return (
      <section className="home-component">
        <p className="console-log">inside home</p>
        <h2>Welcome to Muviato!</h2>
        <ul>
          <li>
            <label>your sweet username: </label>
            <input type="text" placeholder="make a username" value={this.state.username}
       onChange={(e) => this.setState({ username: e.target.value })} id="username" />
          </li>
          <li>
            <label>the secret code, please: </label>
            <input type="text" placeholder="room code" value={this.state.code}
       onChange={(e) => this.setState({ code: e.target.value })} id="roomCode" />
            <Link to='/user' onClick={this.handleOnClick}><button>Enter</button></Link>
          </li>
        </ul>
        <div>
          <Link to='/host'>create a new room</Link>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state, ownProps){
  return { user: state.user }
}

function mapDispatchToProps(dispatch){
 return {
   newUser: (user) => {
    dispatch(userActions.newUser(user))
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
