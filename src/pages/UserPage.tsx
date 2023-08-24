import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";
import useFetching from "../hooks/useFetching";
import { AxiosResponse } from "axios";
import { fetchUser } from "../API/UsersService";
import Loader from "../components/UI/Loader/Loader";
import UserProfile from "../components/UI/UserProfile/UserProfile";
import MyButton from "../components/UI/button/MyButton";

const UserPage = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userParams = useParams();

  useEffect(() => {
    fetchUserByID();
  }, []);

  const [fetchUserByID, isLoading, usersError] = useFetching(async () => {
    const userId = userParams.id ? parseInt(userParams.id, 10) : null;

    const response: AxiosResponse<IUser> | undefined = await fetchUser(userId);

    setUser(response?.data || null);
  });

  return (
    <>
      <MyButton onClick={() => navigate(-1)}>Go back</MyButton>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {user && <UserProfile user={user} />}
          {usersError && <p>{usersError}</p>}
        </>
      )}
    </>
  );
};

export default UserPage;
