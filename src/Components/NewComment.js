import React, { Component } from 'react';
//import styled from 'styled-components';

class NewComment extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  };

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

NewComment.propTypes = {};

NewComment.defaultProps = {
  addComment: () => console.log('Adding new comment')
};

export default NewComment;
