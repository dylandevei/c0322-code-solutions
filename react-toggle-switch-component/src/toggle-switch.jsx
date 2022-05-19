import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick =
      this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !this.state.isToggleOn
    }));
  }

  render() {
    if (!this.state.isToggleOn) {
      return (
      <div className='button-on'>
        <button className='slider-off' onClick={this.handleClick}></button>
        <div className='text'>OFF</div>
      </div>
      );
    } else {
      return (
        <div className='button-off'>
          <button className='slider-on' onClick={this.handleClick}></button>
          <div className='text'>ON</div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
