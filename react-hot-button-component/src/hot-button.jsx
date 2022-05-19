import React from 'react';
let buttonClicks = 0;
class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: buttonClicks };

    this.handleClick =
      this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: buttonClicks++
    }));
  }

  render() {
    if (buttonClicks <= 3) {
      return (
      <button onClick={this.handleClick} className='hot-button'>
        Hot Button</button>
      );
    } else if (buttonClicks <= 6) {
      return (
      <button onClick={this.handleClick} className='hot-button cold'>
        Hot Button</button>
      );
    } else if (buttonClicks <= 9) {
      return (
      <button onClick={this.handleClick} className='hot-button cool'>
        Hot Button</button>
      );
    } else if (buttonClicks <= 12) {
      return (
      <button onClick={this.handleClick} className='hot-button tepid'>
        Hot Button</button>
      );
    } else if (buttonClicks <= 15) {
      return (
      <button onClick={this.handleClick} className='hot-button warm'>
        Hot Button</button>
      );
    } else if (buttonClicks <= 18) {
      return (
        <button onClick={this.handleClick} className='hot-button hot'>
          Hot Button</button>
      );
    } else if (buttonClicks < 21) {
      return (
        <button onClick={this.handleClick} className='hot-button thats'>
          Thats Hot Button</button>
      );
    } else {
      return <button onClick={this.handleClick} className='hot-button damn' >DAMN THATS Hot Button</button>;
    }
  }
}

export default HotButton;
