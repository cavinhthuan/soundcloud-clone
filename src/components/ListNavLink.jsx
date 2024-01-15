import React from "react";
import { NavLink } from "react-router-dom";

//flow
export default function ListNavLink(props) {
  const listNav = props.data.map(({ to, text }, key) => (
    <li className="float-left relative" key={key}>
      <NavLink
        to={to}
        className={({ isActive, isPending, isTransitioning }) =>
          isActive ? props.activeClass : props.defaultClass
        }
      >
        {text}
      </NavLink>
    </li>
  ));

  return (
    <ul className="float-left [list-style:outside_none_none] m-0 p-0">
      {listNav}
    </ul>
  );
}
