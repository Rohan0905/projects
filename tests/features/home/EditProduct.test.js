import React from 'react';
import { shallow } from 'enzyme';
import { EditProduct } from '../../../src/features/home/EditProduct';

describe('home/EditProduct', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <EditProduct {...props} />
    );

    expect(
      renderedComponent.find('.home-edit-product').length
    ).toBe(1);
  });
});
