import React from "react";
import { Li } from "./styles/menu";

export default function Menu({ items, children, ...restProps }) {
  return ( 
    <Li {...restProps}>
      {items &&
        items.map((name, index) => (
          <li key={ `${name}_${index}` } >
            { name }
          </li>
        ))}
    </Li>
  );
}
