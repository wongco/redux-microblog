import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostDetails from './PostDetails';

it('renders without crashing', () => {
  shallow(<PostDetails />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<PostDetails />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
