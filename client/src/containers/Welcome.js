import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as roomActions from '../actions/roomActions';
import Header from '../components/Header';

class Welcome extends Component {

  renderField(field) {
    // adds event handlers for fields
    return (
      <div className={`form-group ${field.meta.touched && field.meta.invalid ? "has-danger" : ""}`}>
        <label className="control-label">{field.label}</label>
        <div>
          <input
            {...field.input}
            type="text"
            className="form-control"
          />
        </div>
        <div className="text-danger">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(props) {
    console.log("onSubmit");
    console.log(props);
  }

  // add one field with redux-form for each input
  render() {
    const { handleSubmit } = this.props;
    const handleClick = () => console.log('New room clicked!');
    return (
      <section>
        <Header />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Welcome to Muviato!</h3>
          <Field
            name="code"
            label="room code: "
            component={this.renderField}
          />
          <Field
            name="username"
            label="username: "
            component={this.renderField}
          />
          <button type='submit' className="btn btn-primary">Join</button>
        </form>
        <div>
          <Link onClick={handleClick} to='/login'>...or create a new room as a host</Link>
        </div>
      </section>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Needs a username!";
  }

  if (!values.code) {
    errors.code = "Must enter room code!"
  }

  // TODO: add extra validations for valid username + room
  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createRoom: roomActions.createRoom }, dispatch)
}

export default reduxForm({
  form: 'Welcome',
  validate
})(
  connect(null, mapDispatchToProps)(Welcome)
);
