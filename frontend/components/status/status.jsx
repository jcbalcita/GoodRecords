import React from 'react';
import { Link } from 'react-router';

const Status = ({ album, type }) => {
  let buttonText = type !== "remove" ? `add to: ${type}` : `remove from lists`

  return (
    <button className="status-button">{buttonText}</button>
  );
};

export default Status;
