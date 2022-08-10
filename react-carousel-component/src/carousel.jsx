import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };

    this.backClick = this.backClick.bind(this);
    this.forwardClick = this.forwardClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  componentDidMount() {
    this.intId = setInterval(this.forwardClick(), 3000);
  }

  dotClick(event) {
    clearInterval(this.intId);
    this.intId = setInterval(() => this.forwardClick(), 3000);
    const id = parseInt(event.target.id);
    this.setState({
      index: id
    });
  }

  forwardClick() {
    clearInterval(this.intId);
    this.intId = setInterval(() => this.forwardClick(), 3000);
    if (this.state.index > this.props.images.length - 1) {
      this.setState({
        index: 1
      });
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }
  }

  backClick() {
    clearInterval(this.intId);
    this.intId = setInterval(() => this.forwardClick(), 3000);
    if (this.state.index === 1) {
      this.setState({
        index: this.props.images.length
      });
    } else {
      this.setState(prevState => ({
        index: this.state.index - 1
      }));
    }
  }

  render() {
    const images = this.props.images;
    return (
      <div className="container carousel-box">
        <div className="row">
          <div className='column-third'>
            <i className="fas fa-chevron-left left-arrow" onClick={this.backClick} id="left"></i>
          </div>
          <div className="column-third">
            {images.map(image => {
              return (this.state.index === image.id && (
                <img key={image.id} src={image.url} alt={image.id} />
              ));
            })}
            <div className='select-buttons'>
              {images.map(image => {
                return (this.state.index === image.id
                  ? <i className="fas fa-circle" id={image.id} key={image.id} onClick={this.dotClick}></i>
                  : <i className="far fa-circle" id={image.id} key={image.id} onClick={this.dotClick}></i>
                );
              })}
            </div>
          </div>
          <div className="column-third">
            <i className="fas fa-chevron-right right-arrow" onClick={this.forwardClick} id="right"></i>
          </div>
        </div>
      </div>
    );
  }
}
