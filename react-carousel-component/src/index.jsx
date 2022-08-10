import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    url: '../images/001.png'

  },
  {
    id: 2,
    url: '../images/004.png'
  },
  {
    id: 3,
    url: '../images/007.png'
  },
  {
    id: 4,
    url: '../images/025.png'
  },
  {
    id: 5,
    url: '../images/039.png'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={images} />);
