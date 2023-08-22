import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { fetchAllUsers } from "../API/UsersService";
import useFetching from "../hooks/useFetching";
import { AxiosResponse } from "axios";
import List from "../components/List";
import UserItem from "../components/UserItem";

const UserPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [fetchUsers, isLoading, usersError] = useFetching(async () => {
    const response: AxiosResponse<IUser[]> | undefined = await fetchAllUsers();
    setUsers(response?.data || []);
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  return <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />;
};

export default UserPage;
