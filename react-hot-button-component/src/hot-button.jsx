import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };

    this.handleClick =
      this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicks: this.state.clicks + 1
    }));
  }

  render() {
    if (this.state.clicks <= 3) {
      return (
      <button onClick={this.handleClick} className='hot-button'>
        Hot Button</button>
      );
    } else if (this.state.clicks <= 6) {
      return (
      <button onClick={this.handleClick} className='hot-button cold'>
        Hot Button</button>
      );
    } else if (this.state.clicks <= 9) {
      return (
      <button onClick={this.handleClick} className='hot-button cool'>
        Hot Button</button>
      );
    } else if (this.state.clicks <= 12) {
      return (
      <button onClick={this.handleClick} className='hot-button tepid'>
        Hot Button</button>
      );
    } else if (this.state.clicks <= 15) {
      return (
      <button onClick={this.handleClick} className='hot-button warm'>
        Hot Button</button>
      );
    } else if (this.state.clicks <= 18) {
      return (
        <button onClick={this.handleClick} className='hot-button hot'>
          Hot Button</button>
      );
    } else if (this.state.clicks < 21) {
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
