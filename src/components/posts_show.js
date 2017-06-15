/**
 * Created by david on 6/13/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from 'Actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    // this is provided via react-router
    this.props.fetchPost(id);
    // now we have a post on our app level state
    // mapStateToProps to get it
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
    // we've added a callback function so that once the post has been deleted the user is redirected to '/'
    // the .then is called in the action
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to ='/'>Back To Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
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
  return { post: posts[ownProps.match.params.id]};
  // posts only contains the one post but it's inside another object so we call it by its id to get it on its own and assign it to post accessible through this.props
  // i think
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);