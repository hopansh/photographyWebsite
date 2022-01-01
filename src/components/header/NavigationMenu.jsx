import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const NavigationMenu = ({ classes }) => {
  const menu = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const [localIsActive, setlocalIsActive] = useState(true);
  return (
    <div className={classes.menu}>
      <a
        href="https://www.hopanshphotography.ga"
        className={classes.item}
        style={
          localIsActive
            ? {
                paddingBottom: "0.4rem",
                borderBottom: "0.1rem solid orange",
              }
            : {}
        }
      >
        Home
      </a>
      {menu.map((item, index) => (
        <NavLink
          to={item.path}
          className={classes.item}
          key={index}
          style={({ isActive }) => {
            if (isActive) setlocalIsActive(false);
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
