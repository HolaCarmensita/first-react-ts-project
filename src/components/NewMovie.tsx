import React, { useRef } from 'react';

type NewMovieProps = {
  onAddMovie: (name: string, year: number) => void;
};

const NewMovie: React.FC<NewMovieProps> = (props) => {
  const NameInputRef = useRef<HTMLInputElement>(null);
  const YearInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = NameInputRef.current!.value;
    const enteredYear = +YearInputRef.current!.value;
    props.onAddMovie(enteredName, enteredYear);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Add a movie</label>
        <input
          placeholder='Enter title'
          type='text'
          id='name'
          ref={NameInputRef}
        ></input>
        <input
          placeholder='Enter year'
          type='text'
          id='year'
          ref={YearInputRef}
        ></input>
      </div>
      <button type='submit'>Add movie</button>
    </form>
  );
};

export default NewMovie;
