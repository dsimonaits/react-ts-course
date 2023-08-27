import React, { FC, PropsWithChildren } from "react";
import cl from "./List.module.css";

interface ListProps<T> extends PropsWithChildren {
  items: T[];

  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <ul className={cl.list}>{props.items.map(props.renderItem)}</ul>;
}

export default List;
