import React, {useState, useEffect} from 'react';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
import UserPage from './pages/UserPage';

const App = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, [])


  async function fetchTodos() {
  try {
    const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")

    setTodos(response.data)
  } catch (error) {
    alert(error)
  }
};
  
 
  return (
    <>
      <UserPage/>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
      </>
  );
};

export default App;