import React, { FC } from "react";
import { IUser } from "../../../types/types";
import cl from "./UserCard.module.css";
interface UserCardProps {
  user: IUser;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={cl.user__card}>
      <img
        src={user.profileImageUrl || "%PUBLIC_URL%/default-user.png"}
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
