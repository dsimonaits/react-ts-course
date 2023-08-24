import React from "react";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Here will be separate user page </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default UserPage;
