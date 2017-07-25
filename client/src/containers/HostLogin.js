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

  onSubmit(props) {
    console.log('onSubmit');
    console.log(props);
  }

  // add one field with redux-form for each input
  render() {
    const { handleSubmit } = this.props;
    const handleClick = () => console.log('Home link clicked!');
    return (
      <section>
        <Header />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Please Login to Host a Viewing</h3>
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
          <button type='submit' className='btn btn-primary'>Enter</button>
        </form>
        <div>
          <Link onClick={handleClick} to='/'>join an existing room</Link>
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
    errors.code = 'Must enter an email!';
  }

  // TODO: add extra validations for valid username + email
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
