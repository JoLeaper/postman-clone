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
      requestBody = {{ name: '1' }} 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />);

    it('expects the request body to be something', () => {
      
    });
  });
});
