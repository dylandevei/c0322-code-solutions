import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const movieId = event.target.getAttribute('data-view');
    if (this.state.index === movieId) {
      this.setState({
        index: null
      });
    } else {
      this.setState({
        index: movieId
      });
    }
  }

  render() {
    return (
      <div className='accordion-div'>
        <ul>
          {
            this.props.movies.map((movie, index) => {
              if (this.state.index === movie.title) {
                return (
                  <li key={index} id={index}>
                    <div className='accordion-header'>
                      <h1 data-view={movie.title} onClick={this.handleClick}> {movie.title} </h1>
                    </div>
                    <div className="accordion-bio">
                      <img src={movie.poster} alt={movie.title} />
                      <p className='accordion-text'>{movie.plot}</p>
                    </div>
                  </li>
                );
              }
              return (
                <li key={index} id={index}>
                  <div className='accordion-header'>
                    <h1 data-view={movie.title} onClick={this.handleClick}>{movie.title}</h1>
                  </div>
                  <div className="accordion-bio hidden">
                    <img src={movie.poster} alt={movie.title} />
                    <p className='accordion-text'>{movie.plot}</p>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Accordion;
