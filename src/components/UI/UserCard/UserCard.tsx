import React, { FC } from "react";
import { IUser } from "../../../types/types";
import cl from "./UserCard.module.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface UserCardProps {
  user: IUser;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  const newPath = useNavigate();
  const location = useLocation();

  return (
    <div
      className={cl.user__card}
      onClick={() => newPath(`${location.pathname}user/${user.id}`)}
    >
      <img
        src={user.profileImageUrl || "default-user.png"}
        alt="User Profile"
        className={cl.user__image}
      />

      <div className={cl.user__info}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
};

export default UserCard;
