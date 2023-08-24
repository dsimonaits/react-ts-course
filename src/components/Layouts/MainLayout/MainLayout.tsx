import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Container from "../Container/Container";
import cl from "./MainLayout.module.css";

const MainLayout: FC = () => {
  return (
    <>
      <header className={cl.header__container}></header>
      <main>
        <Container styles={cl.main__container}>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
