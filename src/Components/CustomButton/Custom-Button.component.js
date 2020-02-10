import React, { Component } from 'react';
import './Custom-Button.styles.css'

const CustomButton = ({ title }) => {
  return <div className="button">{title}</div>;
};

export default CustomButton;
