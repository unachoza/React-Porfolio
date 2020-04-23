import React, { Component } from 'react';
import CustomButton from '../../Components/CustomButton/Custom-Button.component';
import './Homepage.styles.css';
import '../../App.css'

class Homepage extends Component {
  componentDidMount() {
    this.StartTextAnimation(0);
  }

  typeWriter = (text, i, fnCallback) => {
    if (i < text.length) {
      document.querySelector('.annimation').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      setTimeout(() => {
        this.typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  };

  StartTextAnimation = i => {
    const dataText = ['> Hello World', "Welcome to Arianna Choza's Portfolio"];
    if (typeof dataText[i] == 'undefined') {
      setTimeout(() => {
        this.StartTextAnimation(0);
      }, 20000);
    } else if (i < dataText[i].length) {
      this.typeWriter(dataText[i], 0, () => this.StartTextAnimation(i + 1));
    }
  };

  render() {
    return (
      <div className="homepage">
        <div className="annimation">></div>
        <div className="buttons">
          <CustomButton>Projects</CustomButton>
          <CustomButton>About Me</CustomButton>
          <CustomButton>Contact</CustomButton>
        </div>
      </div>
    );
  }
}

export default Homepage;
