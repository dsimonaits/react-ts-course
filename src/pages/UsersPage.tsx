import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { fetchAllUsers } from "../API/UsersService";
import useFetching from "../hooks/useFetching";
import { AxiosResponse } from "axios";
import List from "../components/UI/List/List";
import UserCard from "../components/UI/UserCard/UserCard";
import Loader from "../components/UI/Loader/Loader";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const [fetchUsers, isLoading, usersError] = useFetching(async () => {
    const response: AxiosResponse<IUser[]> | undefined = await fetchAllUsers();

    setUsers(response?.data || []);
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {" "}
      {isLoading && usersError === "" ? (
        <Loader />
      ) : (
        <List
          items={users}
          renderItem={(user: IUser) => <UserCard user={user} key={user.id} />}
        />
      )}
    </>
  );
};

export default UsersPage;
