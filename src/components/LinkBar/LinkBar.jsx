import React from 'react';

export const LinkBar = ({ handleChange, apiLink }) => (
  <>
  <input type="text" name="apiLink" value={apiLink} onChange={handleChange} />
  </>
);