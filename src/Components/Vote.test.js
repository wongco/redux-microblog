import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Vote from './Vote';

it('renders without crashing', () => {
  shallow(<Vote />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<Vote />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
