import React, { Component } from 'react';
import { Field, reduxForm } from 'react-redux';

class userForm extends Component {
  constructor(props){
    super(props);
  }

  renderField(field) {
    // adds event handlers for fields
    return (
      <div>
        <li>
          <label>{field.label}</label>
          <input
            type="text"
            {...field.input} />
        </li>
      </div>
    );
  }

  // add one field with redux-form for each input
  render() {
    return (
      <form>
        <Field
          name="username"
          label="your sweet username: "
          component={this.renderField}
        />
        <Field
          name="room"
          label="secret code, please: "
          component={this.renderField}
        />
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
  validate,
  form: 'UserForm'
})(userForm);
