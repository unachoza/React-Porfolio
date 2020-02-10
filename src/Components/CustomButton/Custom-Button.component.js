import React from 'react';
import './Custom-Button.styles.css';

const CustomButton = ({ children }) => {
  return <div className="button">{children}</div>;
};

export default CustomButton;
