import React, {useState, useEffect} from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
// import Users from "./Users//Users.json"
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
  fetchUsers()
  }, [])

  async function fetchUsers() {
  try {
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")

    setUsers(response.data)
  } catch (error) {
    alert(error)
  }
};

 
  return (
    <>
    <Card onClick= {(num) => console.log("click", num)} variant={CardVariant.outlined}  width='200px' height='200px'>
      <button>Button</button>
    </Card>
      <UserList users={users}/>
      </>
  );
};

export default App;