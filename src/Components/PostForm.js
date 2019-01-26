import React, { Component } from 'react';
// import styled from 'styled-components';

class PostForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className="PostForm">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={this.state.title} />
        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" value={this.state.desc} />
        <label htmlFor="body">Body</label>
        <input type="text" name="body" value={this.state.body} />
      </div>
    );
  }

  state = {
    title: '',
    desc: '',
    body: ''
  };
}

PostForm.propTypes = {};

PostForm.defaultProps = {};

export default PostForm;
