import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewComment from './NewComment';

it('renders without crashing', () => {
  shallow(<NewComment />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<NewComment />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
