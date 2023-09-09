import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';
import { createServer } from 'miragejs';
import data from './data.json';

createServer({
  routes() {
    this.get('api/users', () => {
      return data;
    });
  },
});

/* flytta till egen fil */

type User = {
  id: number;
  name: string;
};
/* flytta till egen fil */

const App: React.FC = () => {
  /* flytta till egen fil */
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('api/users')
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  /* flytta till egen fil */

  const [todos, setTodos] = useState<Todo[]>([]);

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

  <div></div>;

  return (
    <div className='App'>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
