import React from 'react';

export const LinkBar = ({ handleChange, apiLink }) => (
  <>
  API Link
  <input type="text" name="apiLink" value={apiLink} onChange={handleChange} />
  </>
);