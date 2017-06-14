/**
 * Created by david on 6/11/17.
 */
import React, { Component } from 'react';

// 'reduxForm' is like 'connect' allowing component to talk to the redux store
// Field helps take care of many different onHandlers
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// setup for actions
import { connect } from 'react-redux';
import { createPost } from 'Actions';

class PostsNew extends Component {

  renderField (field) {
    const {meta} = field
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    )
    // 'touched' is exactly what it sounds like
    // its as redux form meta property
    // if 'touched' is false we get '' if it's true we get 'field.meta.error'
  }

  onSubmit (values) {
    // this is a react-router function
    // i believe we automatically have access to it because this component is in the route list in index.js
    // the route included must be one of the route in the router
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
    // an action creater can take a callback function
    // see the action creater 'createPost'
  }

  render () {
    const {handleSubmit} = this.props
    // in this situation handleSubmit is a redux form function that takes calls a function what we provide if everything is validated
    // bind is required in this situation to ensure we get the component properties
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">
          Cancel
        </Link>
      </form>
    )
  }
}

function validate (values) {
  //values is a redux form object that has the form values
  const errors = {}

  // validate inputs from the values object
  if (!values.title) {
    errors.title = 'Enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories'
  }

  if (!values.content) {
    errors.content = 'Enter some content'
  }

  // if errors is empty, the form is fine to submit
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
  // allows for multiple forms
})(
  connect(null, { createPost }) (PostsNew)
  // connect the 'CreatePost' action to the 'PostsNew' component
);
