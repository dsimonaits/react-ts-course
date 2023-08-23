import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { fetchAllUsers } from "../API/UsersService";
import useFetching from "../hooks/useFetching";
import { AxiosResponse } from "axios";
import List from "../components/UI/List/List";
import UserCard from "../components/UI/UserCard/UserCard";

const UserPage = () => {
  // Define state for users and specify the type as an array of IUser.
  const [users, setUsers] = useState<IUser[]>([]);
  //
  // Use the custom useFetching hook to handle data fetching.
  // Here, we specify that the callback function will return a Promise with AxiosResponse.
  const [fetchUsers, isLoading, usersError] = useFetching(async () => {
    //
    // Fetch all users and expect the response to be of type AxiosResponse<IUser[]>.
    const response: AxiosResponse<IUser[]> | undefined = await fetchAllUsers();
    //
    // Set the users state to the data received from the response or an empty array if undefined.
    setUsers(response?.data || []);
  });

  // Use the useEffect hook to fetch users when the component mounts.
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    // Render a List component and provide it with the users data.
    <List
      items={users}
      renderItem={(user: IUser) => <UserCard user={user} key={user.id} />}
    />
  );
};

export default UserPage;
