import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/home';

it('renders correctly', () => {
  const elems = renderer.create(<Home />).toJSON();

  expect(elems).toMatchSnapshot();
});
