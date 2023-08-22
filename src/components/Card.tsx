import React, { FC, useState, PropsWithChildren } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps extends PropsWithChildren{
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width = "100px", height = "100px", variant, onClick, children }) => {

const [state, setState] = useState(0)

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "2px solid gray" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
     onClick={() => onClick(state)}>
      {children}
    </div>
  );
};

export default Card;
