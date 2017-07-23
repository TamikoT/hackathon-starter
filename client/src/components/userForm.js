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

function validate() {

}

export default reduxForm({
  validate,
  form: 'UserForm'
})(userForm);
