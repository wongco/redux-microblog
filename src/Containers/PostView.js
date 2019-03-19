import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetails from '../Components/PostDetails';
import {
  deletePostFromAPI,
  updatePostToAPI,
  deleteCommentFromAPI,
  addCommentToAPI,
  getPostDetailsFromAPI,
  voteToApi
} from '../Actions/posts';
import PostForm from '../Components/PostForm';
import Comment from '../Components/Comment';
import NewComment from '../Components/NewComment';
import PropTypes from 'prop-types';

class PostView extends Component {
  async componentDidMount() {
    const { postId } = this.props.match.params;

    // if post doesnt exist in redux state, make api call to obtain it
    if (this.props.post.title.length === 0) {
      try {
        await this.props.getPostDetailsFromAPI(postId);
      } catch (error) {
        this.setState({
          error: true,
          errorMessage: 'Post does not exist.'
        });
      }
    }
  }

  /** toggles view to edit view */
  toggleEdit = () => {
    this.setState(st => ({ isEditing: !st.isEditing }));
  };

  // removes post from API & redux
  deletePost = () => {
    const { postId } = this.props.match.params;
    this.props.deletePostFromAPI(postId);
    this.props.history.replace('/');
  };

  // updates post to API & redux
  savePost = post => {
    const { postId } = this.props.match.params;
    this.props.updatePostToAPI(postId, post);
    this.props.history.replace('/');
  };

  // deletes comment from specific post from API & redux
  deleteComment = commentId => {
    const { postId } = this.props.match.params;
    this.props.deleteCommentFromAPI(postId, commentId);
  };

  // adds comment to specific post to API & redux
  addComment = comment => {
    const { postId } = this.props.match.params;
    this.props.addCommentToAPI(postId, comment);
  };

  // increments or decrements vote total to API & redux
  voteAction = dir => {
    const { postId } = this.props.match.params;
    this.props.voteToApi(dir, postId);
  };

  render() {
    const { comments, title } = this.props.post;

    // check for errors - non existent post
    if (this.state.error) {
      return (
        <div>
          <h1>{this.state.errorMessage}</h1>
        </div>
      );
    }

    // check if post has been loaded yet (future spinner)
    if (title.length === 0) {
      return (
        <div>
          <h1>Loading Blog Entry...</h1>
        </div>
      );
    }

    // post has successfully loaded - load normal views
    return (
      <div>
        {this.state.isEditing ? (
          <PostForm
            post={this.props.post}
            savePost={this.savePost}
            cancel={this.toggleEdit}
          />
        ) : (
          <PostDetails
            id={this.props.match.params.postId}
            post={this.props.post}
            deletePost={this.deletePost}
            toggleEdit={this.toggleEdit}
            votes={this.props.voteToApi}
            voteAction={this.voteAction}
          />
        )}
        {Object.keys(comments).map(id => {
          return (
            <Comment
              id={id}
              key={id}
              comment={comments[id]}
              deleteComment={this.deleteComment}
            />
          );
        })}
        <NewComment addComment={this.addComment} />
      </div>
    );
  }

  state = {
    isEditing: false,
    error: false,
    errorMessage: ''
  };
}

PostView.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  deletePostFromAPI: PropTypes.func,
  updatePostToAPI: PropTypes.func,
  deleteCommentFromAPI: PropTypes.func,
  addCommentToAPI: PropTypes.func,
  getPostDetailsFromAPI: PropTypes.func,
  voteToApi: PropTypes.func
};

PostView.defaultProps = {
  post: {
    title: '',
    description: '',
    body: '',
    comments: {}
  },
  getPost: () => console.log('Getting POST from redux/API')
};

function mapStateToProps(state, props) {
  const { postId } = props.match.params;
  return {
    post: state.posts[postId]
  };
}

const connectedComponent = connect(
  mapStateToProps,
  {
    deletePostFromAPI,
    updatePostToAPI,
    deleteCommentFromAPI,
    addCommentToAPI,
    getPostDetailsFromAPI,
    voteToApi
  }
);

export default connectedComponent(PostView);
