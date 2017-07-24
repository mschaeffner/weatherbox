import React from 'react';
import renderer from 'react-test-renderer';
import Searchbar from '../Searchbar';


describe('Searchbar', () => {
  it('should show searchbar and suggestions based on current keyword', () => {

    const places = [
      { id: 123, name: 'Berlin', country: 'DE' },
      { id: 456, name: 'Bernau', country: 'DE' },
      { id: 789, name: 'Berghagen', country: 'DE' }
    ]

    const component = renderer.create(<Searchbar keyword="Ber" places={places} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
