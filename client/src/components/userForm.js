import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class UserForm extends Component {

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

  onSubmit(values) {
    console.log(values);

  }

  // add one field with redux-form for each input
  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
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
          <button type='submit' className="btn btn-primary">Enter</button>
        </form>
        <div>
          <Link to='/host'>create a new room as a host</Link>
        </div>
      </section>
    )
  }
}

function validate(values) {
  console.log(values);
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

export default reduxForm({
  form: 'UserForm',
  validate
})(UserForm);
