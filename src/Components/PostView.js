import React, { Component } from 'react';
// import styled from 'styled-components';

class PostView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // renders PostView
    return <div />;
  }

  state = {
    isEditing: false
  };
}

PostView.propTypes = {};

PostView.defaultProps = {
  id: '1',
  post: {
    title: 'amazing things',
    description: `you ain't seen nothing yet`,
    body:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad numquam recusandae debitis maxime quas asperiores, ipsam voluptate nisi inventore. Modi quae id amet asperiores provident minus corrupti cupiditate maxime nostrum.'
  }
};

export default PostView;
