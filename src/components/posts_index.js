import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts(){
    return this.props.posts.map((post) => {
      return(
        <li key={post.id}>

          <Link to={"posts/" + post.id}>{post.title}</Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <div>
          <Link to="/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts.all};
}

export default  connect(mapStateToProps, { fetchPosts })(PostsIndex);