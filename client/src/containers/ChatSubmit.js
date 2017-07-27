import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as roomActions from '../actions/roomActions';
import * as userActions from '../actions/userActions';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

class ChatSubmit extends Component {
  constructor(props) {
    super (props);
    console.log(props);

    console.log(socket);

    this.state = { currentUser: props.currentUser };
    console.log( this.state );

    // if ( this.state.username === undefined ) {
    //   console.log( 'username and code are both needed' );
    //   this.props.history.push( '/' );
    // }
  }

  renderField(field) {
    // adds event handlers for fields
    return (
      <div className={`form-group ${field.meta.touched && field.meta.invalid ? 'has-danger' : ''}`}>
        <label className="control-label">{field.label}</label>
        <div>
          <input
            {...field.input}
            type='text'
            className='form-control'
          />
        </div>
        <div className='text-danger'>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  msgComponent(data) {
    console.log(data);
    return (
      <div>
        {data}
      </div>
    )
  }

  onSubmit(formData) {
    console.log('in onSubmit');
    console.log(this.props);
    this.props.addMessage(formData);

    // emit event to server to join a room
    socket.emit('enterRoom', {
      'code': 'ADA1',
      'username': this.state.username
    });
    // w/ callback for server response
    socket.on('enterRoom', (data) => {
      console.log('room entered');
    });

    socket.emit('msgSent', {
      'username': this.state.username,
      'message': formData.message
    })

    socket.on('msgShared', (data) => {
      console.log(data);
      // attach message to DOM
      // use setState

      // ReactDOM.render(
      //   // this.msgComponent(data),
      //   document.getElementById('messages-container')
      // );
    });

  }

  // `handleSubmit()` is a redux-form func for validations
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <Header />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <h3>now in room: {this.state.code}</h3>
          <h4>as {this.state.username}</h4>
          <Field
            name='message'
            label='message: '
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </section>
    )
  }
}

function validate(values) {
  const errors = {};

  if ( !values.message ) {
    errors.message = "can't send it blank!";
  }

  return errors;
}


function mapStateToProps(state, ownProps) {
  return { currentUser: state.currentUser }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createRoom: roomActions.createRoom, newUser: userActions.newUser }, dispatch)
}

export default reduxForm({
  form: 'ChatSubmit',
  validate
})(
  connect(mapStateToProps, mapDispatchToProps)(ChatSubmit)
);
