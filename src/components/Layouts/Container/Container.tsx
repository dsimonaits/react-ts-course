import React, { FC, ReactNode } from "react";
import cl from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  styles?: string;
}

const Container: FC<ContainerProps> = ({ children, styles }) => {
  const combinedClasses = `${cl.container} ${styles}`;
  return <div className={combinedClasses}>{children}</div>;
};

export default Container;
