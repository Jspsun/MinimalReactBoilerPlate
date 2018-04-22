import React from 'react';
import PropTypes from 'prop-types';

export default function SimpleComponent(props) {
  return (
    <div>{props.message}</div>
  );
}

SimpleComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
