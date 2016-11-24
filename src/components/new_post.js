import React, { Component } from 'react';
import  { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostNew extends Component {

  render(){
    const { handleSubmit } = this.props;
    //same as
    //const handleSubmit = this.props.handleSubmit;

    const {fields: {title,content,categories}} = this.props;
    //same as (for each one):
    // const title = this.props.fields.title;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
      <h3>Create new post</h3>
      <div className="form-group">
        <label>Title</label>
        {// kind of: (but up bind access directly(bidea las props de title), down have to this.props.formProps)
         //<input type="text" className="form-control" formProps={title} />
       }
        <input type="text" className="form-control" {...title} />
        <div className="text-help">
          {title.touched ? title.error : ''}
        </div>
      </div>

      <div className="form-group">

        <label>Categories</label>
        <input type="text" className="form-control"  {...categories}/>
      </div>
      <div className="form-group">
        <label>Categories</label>
        <textarea className="form-control" {...content}/>
      </div>

      <button type="submit" className="btn btn-default">Submit</button>

      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a user name';
  }
  return errors;
}


export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);

