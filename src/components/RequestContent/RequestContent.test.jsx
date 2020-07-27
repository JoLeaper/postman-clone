import React from 'react';
import { shallow } from 'enzyme';
import { RequestContent } from '../RequestContent/RequestContent';

describe('RequestContent component', () => {
  let wrapper;
  let handleChange;
  let handleSubmit;

  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();

    wrapper = shallow(<RequestContent
      requestBody = '{ name: 1 }' 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />);
  });    

  it('expects the request body to be something', () => {
    expect(wrapper.find('textarea')).toHaveLength(1);
  });

  it('invokes the onChange prop when we change the name of the textarea', () => {
    wrapper.find('textarea[name="requestBody"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes the onSubmit prop when we click submit', () => {
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
