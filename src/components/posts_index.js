/**
 * Created by david on 6/10/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
  // called automatically by react
    this.props.fetchPosts();
  }

  render() {
    console.log('posts: ', this.props.posts);
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// hooking up the fetchPosts action creator to our PostsIndex class
// get access to this.props.fetchPosts