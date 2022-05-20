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
  }
}

export default AppDrawer;
