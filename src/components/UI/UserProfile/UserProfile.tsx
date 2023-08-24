import React from "react";
import cl from "./UserProfile.module.css"; // Import CSS cl
import { IUser } from "../../../types/types";

interface UserProfileProps {
  user: IUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className={cl.userProfile}>
      <div className={cl.header}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className={cl.details}>
        <div className={cl.section}>
          <h2>Contact</h2>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
        <div className={cl.section}>
          <h2>Address</h2>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
        </div>
        <div className={cl.section}>
          <h2>Company</h2>
          <p>Name: {user.company.name}</p>
          <p>Catch Phrase: {user.company.catchPhrase}</p>
          <p>Business: {user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
