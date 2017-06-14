/**
 * Created by david on 6/13/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from 'Actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    // this is provided via react-router
    this.props.fetchPost(id);
    // now we have a post on our app level state
    // mapStateToProps to get it
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps ({ posts }, ownProps ) {
  // whatever is in state for the postsReducer is accessible through 'posts'
  // set reducer combiner
  // here we are just calling 'posts' off of state using es6 destructuring
  // ownProps gives your the container/component props
  return { post: posts[ownProps.match.params.id]}
  // return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);