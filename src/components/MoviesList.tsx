import React from 'react';
import './MovieList.css';

interface MoviesListProps {
  items: { id: number; name: string; year: number }[];
  //   onDeleteMovie: (id: string) => void;
}

const MoviesList: React.FC<MoviesListProps> = (props) => {
  return (
    <ul>
      {props.items.map((movie) => (
        <li key={movie.id}>
          <span>{movie.name}</span>
          <span>{movie.year}</span>
          <button className='add'>Add</button>
          <button className='edit'>Edit</button>
          <button className='delete'>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
