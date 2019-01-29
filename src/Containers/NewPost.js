import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Components/PostForm';
import { addPostToAPI } from '../actionCreators';

class NewPost extends Component {
  addPost = postDetails => {
    this.props.addPostToAPI(postDetails);
    this.props.history.push('/');
  };

  cancel = () => this.props.history.push('/');

  render() {
    return (
      <div>
        <h3>New Post</h3>
        <PostForm savePost={this.addPost} cancel={this.cancel} />
      </div>
    );
  }
}

const connectedComponent = connect(
  null,
  { addPostToAPI }
);

export default connectedComponent(NewPost);
