import React from 'react';

export const RequestContent = ({ requestBody, requestMethod, handleChange }) => (
  <>
  <form onChange={handleChange}>
    <label>
      <p>GET</p>
      <input type="radio" name="requestMethod" value="GET"/>
    </label>
    <label>
      <p>POST</p>
      <input type="radio" name="requestMethod" value="POST"/>
    </label>
    <label>
      <p>PUT</p>
      <input type="radio" name="requestMethod" value="PUT"/>
    </label>
    <label>
      <p>DELETE</p>
      <input type="radio" name="requestMethod" value="DELETE"/>
    </label>
  </form>
  </>
);