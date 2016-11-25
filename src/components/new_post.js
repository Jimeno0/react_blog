import React, { Component, PropTypes } from 'react';
import  { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';



class PostNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props){
    this.props.createPost(props)
      .then(()=>{
        this.context.router.push('/');
      })
  }

  render(){
    const { handleSubmit } = this.props;

    const {fields: {title,content,categories}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">

          <label>Categories</label>
          <input type="text" className="form-control"  {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-default">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a user name';
  };
  if (!values.categories) {
    errors.categories = 'Enter a categorie name';
  };
  if (!values.content) {
    errors.content = 'Enter a content name';
  };
  return errors;
}


export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);

