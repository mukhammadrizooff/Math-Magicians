import React from 'react';
import renderer from 'react-test-renderer';

import Quote from '../../components/quote';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
