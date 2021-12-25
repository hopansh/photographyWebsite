import React from "react";
import HeaderName from "./HeaderName";
import NavigationMenu from "./NavigationMenu";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
const useStyle = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "4rem",
    position: "fixed",
    zIndex: "10",
    background: "white",
    justifyContent: "space-between",
  },
  name: {
    fontSize: "2rem",
    fontWeight: "300",
    padding: "1rem",
    textTransform: "uppercase",
    fontFamily: "'Raleway', sans-serif",
  },
  menu: {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "uppercase",
  },
  item: {
    paddingRight: "1.2rem",
  },
});
const Header = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <HeaderName classes={classes} />
      <NavigationMenu classes={classes} />
    </Box>
  );
};

export default Header;
