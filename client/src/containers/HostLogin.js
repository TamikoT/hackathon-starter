import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as roomActions from '../actions/roomActions';
import * as userActions from '../actions/userActions';


class HostLogin extends Component {
  constructor(props){
    super(props);
    this.generateRoomCode = this.generateRoomCode.bind(this);
    this.state = {
      username: '',
      code: this.generateRoomCode(),
      valid: false
    };
    this.withSubmit = this.withSubmit.bind(this);
  }

  // makes random 4 letter/number code
  generateRoomCode() {
    var code = '';
    var chars = '0123456789ABCDEFGHIJKLMNOPQURSTUVWXYZ';
    for ( var i = 0; i < 4; i ++ ) {
      code += chars.substr(Math.floor(Math.random() * (chars.length - 1)), 1);
    }
    return code;
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

  withSubmit(formData){
    // console.log('called withSubmit()');
    // console.log(formData);
    this.setState({unsername: formData.username});
    this.props.newUser(this.state.username);
    this.props.createRoom(this.state.code);
    //redirect to ChatWindow
    this.props.history.push({pathname: '/room', state: {code: this.state.code}});
  }

  // `handleSubmit()` is a redux-form func for validations
  render() {
    const { handleSubmit } = this.props;
    const handleClick = () => console.log('Home link clicked!');
    return (
      <section>
        <Header />
        <form onSubmit={handleSubmit(this.withSubmit)}>
          <h3>Host a Muviato Viewing</h3>
          <Field
            name='username'
            label='username: '
            component={this.renderField}
          />
          <Field
            name='email'
            label='email: '
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Make a New Room</button>
        </form>
        <div>
          <Link onClick={handleClick} to='/'>nevermind... join an existing room</Link>
        </div>
      </section>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Needs a username!';
  }

  if (!values.email) {
    errors.email = 'Must enter an email!';
  }

  // TODO: add extra validations for valid username + email
  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createRoom: roomActions.createRoom, newUser: userActions.newUser }, dispatch)
}

export default reduxForm({
  form: 'HostLogin',
  validate
})(
  connect(null, mapDispatchToProps)(HostLogin)
);
