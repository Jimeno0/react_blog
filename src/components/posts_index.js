import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPost();
  }

  render(){
    return(
      <div>
        <div>
          <Link to="/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        This is a list of posts
      </div>
    );
  }
}
// same as this:

// function mapToDispatch(dispatch) {
//   return bindActionCreators({ fetchPost }, dispatch)
// }
// export default  connect(null, mapToDispatch)(PostsIndex);

export default  connect(null, { fetchPost })(PostsIndex);