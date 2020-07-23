import React from 'react';
import { shallow } from 'enzyme';
import { LinkBar } from '../LinkBar/LinkBar';

describe('LinkBar component', () => {
  let wrapper;
  let handleChange;

  beforeEach(() => {
    handleChange = jest.fn();
    wrapper = shallow(<LinkBar 
      apiLink="www.google.com"
      handleChange={handleChange}
    />);
  });

  it('has input named name who\'s value is the name prop', () => {
    expect(wrapper.find('input[name="apiLink"]').prop('value')).toEqual('www.google.com');
  });

  it('invokes the onChange prop when we change the name of the input', () => {
    wrapper.find('input[name="apiLink"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

});
