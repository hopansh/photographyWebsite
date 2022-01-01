import React from "react";
import { NavLink } from "react-router-dom";
const NavigationMenu = ({ classes }) => {
  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className={classes.menu}>
      {menu.map((item, index) => (
        <NavLink
          to={item.path}
          className={classes.item}
          key={index}
          style={({ isActive }) => {
            return {
              paddingBottom: isActive ? "0.4rem" : "",
              borderBottom: isActive ? "0.1rem solid orange" : "",
            };
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationMenu;
