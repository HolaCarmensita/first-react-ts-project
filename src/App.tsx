import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import MoviesList from './components/MoviesList';
import { Todo } from './todo.model';
import { Movie } from './movie.model';
import NewMovie from './components/NewMovie';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('/api/movies')
      .then((resp) => resp.json())
      .then((json) => setMovies(json.movies))
      .catch((err) => console.log(err));
  }, []);

  const movieAddHandler = (name: string, year: number) => {
    setMovies((prevMovies) => [
      ...prevMovies,
      { id: Math.floor(Math.random() * 100), name: name, year: year },
    ]);
  };

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <MoviesList items={movies}></MoviesList>
      <NewMovie onAddMovie={movieAddHandler}></NewMovie>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
