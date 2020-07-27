import React from 'react';
import PropTypes from 'prop-types';

export const RequestContent = ({ requestBody, handleChange, handleSubmit }) => (
  <>
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        <span>GET</span>
        <input type="radio" name="requestMethod" value="GET"/>
      </label>
      <label>
        <span>POST</span>
        <input type="radio" name="requestMethod" value="POST"/>
      </label>
      <label>
        <span>PUT</span>
        <input type="radio" name="requestMethod" value="PUT"/>
      </label>
      <label>
        <span>DELETE</span>
        <input type="radio" name="requestMethod" value="DELETE"/>
      </label>
      <button>Submit</button>
    </form>

    <textarea type="text" style={{ width: 500, height: 200 }} name="requestBody" value={requestBody} onChange={handleChange}/>
  </>
);

RequestContent.propTypes = {
  requestBody: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
