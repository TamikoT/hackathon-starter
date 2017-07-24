import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class userForm extends Component {

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
        <div className="text-warning">
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
    )
  }
}

function validate(values) {
  console.log(values);
  const errors = {};

  // validate the inputs and show validation errors to the user
  if (!values.username) {
    errors.username = "Needs a username!";
  }

  if (!values.code) {
    errors.code = "Must enter room code!"
  }

  // TODO: add extra validations for valid username + room

  // redux-form: if errors is empty then the form is fine to submit
  return errors;
}

export default reduxForm({
  form: 'UserForm',
  validate
})(userForm);
