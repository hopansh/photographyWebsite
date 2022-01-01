import React from "react";
import HeaderName from "./HeaderName";
import NavigationMenu from "./NavigationMenu";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
const useStyle = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "10vh",
    position: "fixed",
    zIndex: "10",
    background: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: "2rem",
    fontWeight: "300",
    padding: "1rem",
    textTransform: "uppercase",
    fontFamily: "'Raleway', sans-serif",
    "&:hover": {
      color: "orange",
    },
  },
  menu: {
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "uppercase",
    paddingRight: "1rem",
  },
  item: {
    color: "black",
    textDecoration: "none",
    padding: "0.5rem 0.4rem",
    margin: "0rem 0.2rem",
    "&:hover": {
      borderBottom: "0.1rem solid orange",
      paddingBottom: "0.4rem",
    },
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
