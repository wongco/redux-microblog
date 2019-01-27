import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Components/PostForm';
import { addPost } from '../actionCreators';

class PostFormContainer extends Component {
  render() {
    return <PostForm {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedComponent = connect(
  mapStateToProps,
  { addPost }
);

export default connectedComponent(PostFormContainer);
