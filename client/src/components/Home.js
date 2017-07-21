import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions'

class Home extends Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      input: ''
    };
  }

  handleOnClick(event){
    event.preventDefault();
    console.log('user clicked `enter` button');
    this.props.newUser(this.state.input);
    this.setState({ input: ''});
  }

  render() {
    return (
      <section className="home-component">
        <p className="console-log">inside home</p>
        <h2>Welcome to Muviato!</h2>
        <ul>
          <li>
            <label>your sweet username: </label>
            <input id="hostUsername" type="text" placeholder="make a username" />
          </li>
          <li>
            <label>the secret code, please: </label>
            <input id="roomCode" type="text" placeholder="room code" />
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
