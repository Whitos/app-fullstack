import { useState, useEffect } from 'react'
import { fetchTodos } from './api/todoApi';

type Todo = {
  id: number;
  title: string;
  done: boolean;
  created_at: Date;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((res) => setTodos(res.data));
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default App
