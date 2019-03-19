import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Components/PostForm';
import { addPostToAPI } from '../Actions/posts';
import PropTypes from 'prop-types';

class NewPost extends Component {
  addPost = postDetails => {
    this.props.addPostToAPI(postDetails);
    this.props.history.push('/');
  };

  // returns user to home page upon canceling
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

NewPost.propTypes = {
  addPostToAPI: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

const connectedComponent = connect(
  null,
  { addPostToAPI }
);

export default connectedComponent(NewPost);
