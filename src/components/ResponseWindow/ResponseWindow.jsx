import React from 'react';
import PropTypes from 'prop-types';

export const ResponseWindow = ({ response }) => (
  <textarea readOnly style={{ width: 500, height: 200 }} name="responseWindow" value={JSON.stringify(response)} />
);

ResponseWindow.propTypes = {
  response: PropTypes.string.isRequired,
};
