import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Comment from './Comment';

it('renders without crashing', () => {
  shallow(<Comment />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<Comment />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
