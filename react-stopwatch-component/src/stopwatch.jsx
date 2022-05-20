import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isPaused: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isPaused: !this.state.isPaused
    }));
    this.startTimer();
  }

  tick() {
    this.setState(state => ({
      seconds: this.state.seconds + 1
    }));
  }

  reset() {
    this.setState(state => ({
      seconds: 0
    }));
  }

  startTimer() {
    if (this.state.isPaused) {
      this.interval = setInterval(() => this.tick(), 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  render() {
    if (this.state.isPaused) {
      return (
      <div className='circle' onClick={this.reset}>
        <div className='counter'>{this.state.seconds}</div>
        <button className='button' onClick={this.handleClick}>
          <i className='fa-solid fa-play'></i></button>
      </div>
      );
    }
    return (
        <div className='circle'>
          <div className='counter'>{this.state.seconds}</div>
          <button className='button' onClick={this.handleClick}>
            <i className='fa-solid fa-pause'></i></button>
        </div>
    );

  }
}

export default Stopwatch;
