import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };

    this.handleClick =
      this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      sidebarOpen: !this.state.sidebarOpen
    }));
  }

  render() {
    if (!this.state.sidebarOpen) {
      return (
        <div>
          <div className='sidebar-off'>
            <div className='sidebar-text'>
              <h1>Settings</h1>
              <ul onClick={this.handleClick}>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
                <h4>Our Story</h4>
              </ul>
            </div>
          </div>
          <header>
            <button onClick={this.handleClick}><i className="fa-solid fa-bars"></i></button>
          </header>
          <div className='container'>
            <div className='row'>
              <div className='column-full'>
                <div className='img'>
                  <img src="https://pbs.twimg.com/media/FRXaiWUWUAIMXEO.jpg:large" alt="kirby and friends" />
                </div>
              </div>
            </div>
          </div>
          <div className='overlay' onClick={this.handleClick}></div>
        </div>
      );
    } else {
      return (
        <div>
          <div className='sidebar-on'>
            <div className='sidebar-text'>
              <h1>Settings</h1>
              <ul onClick={this.handleClick}>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
                <h4>Our Story</h4>
              </ul>
            </div>
          </div>
          <header>
                <button><i className="fa-solid fa-bars"></i></button>
          </header>
          <div className='container'>
            <div className='row'>
              <div className='column-full'>
                <div className='img'>
                  <img src="https://pbs.twimg.com/media/FRXaiWUWUAIMXEO.jpg:large" alt="kirby and friends" />
                </div>
              </div>
            </div>
          </div>
          <div className='overlay-on' onClick={this.handleClick}></div>
        </div>
      );
    }
  }
}

export default AppDrawer;
