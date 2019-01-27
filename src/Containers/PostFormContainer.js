import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Components/PostForm';
import { addPost, savePost, deletePost } from '../actionCreators';

class PostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state, props) {
  const id = props.match.params.postId;
  if (id) {
    return {
      id,
      post: state.posts[id]
    };
  }
  return {};
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost, savePost, deletePost }
);

export default connectedComponent(PostFormContainer);
