import React from 'react';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = ({ onChange }) => {
  return (
    <label>
      <Toggle
        className='day-night-toggle'
        icons={{
          unchecked: <FontAwesomeIcon inverse icon='moon' />,
          checked: <FontAwesomeIcon inverse icon='sun' />,
        }}
        onChange={onChange}
      />
    </label>
  );
};

export default ThemeToggle;
