import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { fetchAllUsers } from "../API/UsersService";
import useFetching from "../hooks/useFetching";
import { AxiosResponse } from "axios";
import List from "../components/List/List";
import UserCard from "../components/UI/UserCard/UserCard";

const UserPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [fetchUsers, isLoading, usersError] = useFetching(async () => {
    const response: AxiosResponse<IUser[]> | undefined = await fetchAllUsers();
    setUsers(response?.data || []);
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserCard user={user} key={user.id} />}
    />
  );
};

export default UserPage;
