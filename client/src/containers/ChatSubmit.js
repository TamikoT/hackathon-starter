import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Header from '../components/Header';
import * as roomActions from '../actions/roomActions';
import * as userActions from '../actions/userActions';
import * as messageActions from '../actions/messageActions';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

class ChatSubmit extends Component {
  constructor(props) {
    super(props);
    this.addMessage = props.addMessage.bind(this);
    // this.addMessage = this.addMessage.bind(this);
    console.log(props);
    console.log(socket);

    this.state = props.currentUser;
    console.log(this.state);
  }

  // redux-form: event handlers for fields
  renderField(field) {
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
    );
  }


  onSubmit(formData) {
    // emit event to server to join a room
    socket.emit('enterRoom', {
      'code': 'ADA1',
      'username': formData.username
    });
    // w/ callback for server response
    socket.on('enterRoom', (data) => {
      console.log('room entered');
    });

    socket.emit('msgSent', {
      'username': formData.username,
      'message': formData.message
    });

    socket.on('msgShared', (data) => {
      console.log(data);
      this.props.addMessage(formData);
    });
  }

  // `handleSubmit()` is a redux-form func for validations
  render() {
    var {handleSubmit} = this.props;
    var self = this;
    return (
      <section>
        <Header />
        <form onSubmit={handleSubmit(self.onSubmit)}>
          <h3>now in room: {self.state.code}</h3>
          <h4>as {self.state.username}</h4>
          <Field
            name='message'
            label='message: '
            component={self.renderField}
          />
          <input type='hidden' value={self.state.username} />
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </section>
    );
  }
}

function validate(values) {
  var errors = {};

  if ( !values.message ) {
    errors.message = "can't send it blank!";
  }

  return errors;
}

function mapStateToProps(state, ownProps) {
  return ({
    messages: state.messages,
    currentUser: state.currentUser,
    addMessage: messageActions.addMessage
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addMessage: messageActions.addMessage}, dispatch);
}

export default reduxForm({form: 'ChatSubmit', validate
})(
  connect(mapStateToProps, mapDispatchToProps)(ChatSubmit)
);
