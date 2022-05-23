import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let error = null;
    let icon = null;
    if (this.state.password === '') {
      icon = 'fa-solid fa-x';
      error = 'A password is required.';
    } else if (this.state.password.length < 8) {
      icon = 'fa-solid fa-x';
      error = 'Your password is too short.';
    } else {
      icon = 'fa-solid fa-check';
      error = null;
    } return (
        <div>
          <p className='password-header'>Password</p>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <i className={icon}></i>
          <p className='password-text'>{error}</p>
        </div>
    );
  }
}

export default ValidatedInput;
