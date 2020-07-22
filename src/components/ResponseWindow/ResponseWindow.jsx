import React from 'react';

export const ResponseWindow = ({ response }) => (
  <textarea readOnly style={{ width: 500, height: 200 }} name="responseWindow" value={JSON.stringify(response)} />
);