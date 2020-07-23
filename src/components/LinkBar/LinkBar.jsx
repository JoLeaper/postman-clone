import React from 'react';
import PropTypes from 'prop-types';

export const LinkBar = ({ handleChange, apiLink }) => (
  <>
  API Link
    <input type="text" name="apiLink" value={apiLink} onChange={handleChange} />
  </>
);

LinkBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  apiLink: PropTypes.string.isRequired
};
