import React from 'react';
import { shallow } from 'enzyme';
import { ResponseWindow } from '../ResponseWindow/ResponseWindow';

describe('ResponseWindow component', () => {
  let wrapper;
  let response = '{ this: is an example }';

  beforeEach(() => {
    wrapper = shallow(<ResponseWindow 
      response={response}
    />);
  });

  it('has textarea named name who\'s value is the name prop', () => {
    expect(wrapper.find('textarea[name="responseWindow"]').prop('value')).toEqual('"{ this: is an example }"');
  });
  it('expects the response window to have a textarea', () => {
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

});
