import React from 'react';
import renderer from 'react-test-renderer';
import MyPlacesItem from '../MyPlacesItem';


describe('MyPlacesItem', () => {
  it('should show the name of the place as a link', () => {

    const place = {
      name: 'Berlin',
      id: 123
    }

    const component = renderer.create(<MyPlacesItem place={place} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
