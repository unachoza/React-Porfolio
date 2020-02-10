import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }
 componentDidMount() {
 this.StartTextAnimation(0)
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
      this.typeWriter(dataText[i], 0, this.StartTextAnimation(i + 1));
    }
  };

  // typewritterEffect = () => {
  //   const dataText = ['> Hello World', "Welcome to Arianna Choza's Portfolio"];
  // };

  coppied =
    ('DOMContentLoaded',
    function(event) {
      // array with texts to type in typewriter
      var dataText = ['> Hello World', "Welcome to Arianna Choza's Portfolio"];

      // type one text in the typwriter
      // keeps calling itself until the text is finished
      function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < text.length) {
          // add next character to h1
          document.querySelector('.annimation').innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(() => {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
      }
      // start a typewriter animation for a text in the dataText array
      function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
          typeWriter(dataText[i], 0, function() {
            // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
          });
        }
        //  if (i > dataText[i].length) {
        //    let text =  document.querySelector('.annimation')
        //        text.style.width = 100 %

        //  }
      }
      // start the text animation
      StartTextAnimation(0);
    });
  render() {
    return (
      <div>
        <div>hello world</div>
        <div className="annimation">></div>
      </div>
    );
  }
}

export default Homepage;
