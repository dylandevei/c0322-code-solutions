import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const movies = [
  {
    title: 'Spiderman: Homecoming',
    plot: 'Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.',
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg'

  },
  {
    title: 'Spiderman: Far From Home',
    plot: 'Peter Parker\'s relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission.The world is in danger as four massive elemental creatures -- each representing Earth, air, water and fire-- emerge from a hole torn in the universe.Parker soon finds himself donning the Spider - Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  },
  {
    title: 'Spiderman: No Way Home',
    plot: 'With Spider-Man\'s identity now revealed, our friendly neighborhood web- slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider - Man.',
    poster: 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'

  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion movies={movies} />);
