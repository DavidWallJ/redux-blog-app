/**
 * Created by david on 6/10/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
  // called automatically by react
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      // the problem is here.  posts aren't in proper format.
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
          {post.id}
        </li>
      );
    });
    // remember this is an object not an array
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// fetchPosts: fetchPosts
// hooking up the fetchPosts action creator to our PostsIndex component
// also sending along 
// get access to this.props.fetchPosts