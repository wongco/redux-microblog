import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TitleList from './TitleList';

it('renders without crashing', () => {
  shallow(<TitleList />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<TitleList />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
