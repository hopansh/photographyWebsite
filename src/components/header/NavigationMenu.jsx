import React from "react";
const NavigationMenu = ({ classes }) => {
  const menu = ["Home", "About", "Get In Touch"];
  return (
    <div className={classes.menu}>
      {menu.map((item, index) => (
        <div className={classes.item} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default NavigationMenu;
