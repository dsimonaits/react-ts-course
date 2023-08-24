import React, { FC } from "react";
import { IUser } from "../../../types/types";
import cl from "./UserCard.module.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// Define an interface UserCardProps to specify the expected prop structure.
interface UserCardProps {
  user: IUser; // The 'user' prop should be of type IUser.
}

// Create a functional component UserCard that takes UserCardProps as props.
const UserCard: FC<UserCardProps> = ({ user }) => {
  // Render a user card component with the provided 'user' prop.

  const newPath = useNavigate();
  const location = useLocation();

  return (
    <div
      className={cl.user__card}
      onClick={() => newPath(`${location.pathname}user/${user.id}`)}
    >
      {/* Render the user's profile image, with a fallback to "default-user.png" if 'user.profileImageUrl' is falsy. */}
      <img
        src={user.profileImageUrl || "default-user.png"}
        alt="User Profile"
        className={cl.user__image}
      />

      <div className={cl.user__info}>
        {/* Display the user's name, email, and website using data from 'user'. */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
};

export default UserCard;
