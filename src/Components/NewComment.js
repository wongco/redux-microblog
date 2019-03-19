import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewComment extends Component {
  // handler for submit event from DOM
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  };

  // controlled component handling
  handleChange = evt => {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <div className="NewComment">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="New Comment"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }

  state = {
    comment: ''
  };
}

NewComment.propTypes = {
  addComment: PropTypes.func
};

NewComment.defaultProps = {
  addComment: () => console.log('Adding new comment')
};

export default NewComment;
