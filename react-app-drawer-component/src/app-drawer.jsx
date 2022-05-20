import React from 'react';

class AppDrawer extends React.Component {
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
    return (
      <div>
      <header>
        <div className='navbar'>
          <div>
              <button><i className="fa-solid fa-bars"></i></button>
          </div>
        </div>
      </header>
        <div className='container'>
      <div className='row'>
        <div className='column-full'>
          <div className='img'>
              <img src="https://pbs.twimg.com/media/FRXaiWUWUAIMXEO.jpg:large" alt="" />
          </div>
        </div>
      </div>
    </div>
      </div>

    );
  }
}

export default AppDrawer;
