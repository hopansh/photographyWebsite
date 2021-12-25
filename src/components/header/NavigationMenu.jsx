import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={item.path} className={classes.item} key={index}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationMenu;
