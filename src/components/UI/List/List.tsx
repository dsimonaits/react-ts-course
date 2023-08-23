import React, { FC, PropsWithChildren } from "react";
import cl from "./List.module.css";

// Define a generic interface ListProps that takes a type parameter T.
// It extends PropsWithChildren to support children elements.
interface ListProps<T> extends PropsWithChildren {
  // Define a prop 'items' as an array of type T.
  items: T[];
  // Define a prop 'renderItem' as a function that takes an item of type T and returns a ReactNode.
  renderItem: (item: T) => React.ReactNode;
}

// Define a functional component List that takes a generic type parameter T.
// It receives props of type ListProps<T>.
function List<T>(props: ListProps<T>) {
  // Render an unordered list with the CSS class 'list' from List.module.css.
  // Map each item in 'props.items' using the 'props.renderItem' function to generate React nodes.
  return <ul className={cl.list}>{props.items.map(props.renderItem)}</ul>;
}

// Export the List component.
export default List;
