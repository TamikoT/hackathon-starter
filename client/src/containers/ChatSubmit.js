import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as roomActions from '../actions/roomActions';
import * as userActions from '../actions/userActions';

class ChatSubmit extends Component {
  constructor(props){
    super(props);
    this.state = props.currentUser;
    console.log(this.state);
    if (this.state.username === undefined) {
      console.log('username and code are both needed');
      this.props.history.push('/');
    }
    this.withSubmit = this.withSubmit.bind(this);
    // console.log(this.props);
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
    this.props.newUser(this.state.username);
    // this.props.createRoom(this.state.code); //join room instead
    //redirect to ChatWindow
    this.props.history.push({pathname: '/room', state: {code: this.state.code}});
  }

  // `handleSubmit()` is a redux-form func for validations
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <Header />
        <form onSubmit={handleSubmit(this.withSubmit)}>
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

  if (!values.message) {
    errors.message = "can't send it blank!";
  }

  // TODO: add extra validations for valid username + email
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
