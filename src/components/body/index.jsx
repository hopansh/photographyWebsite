import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../about";
const useStyle = makeStyles({
  root: {
    width: "100vw",
    height: "90vh",
    marginTop: "10vh",
    overflowY: "scroll",
  },
});

const Body = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Container>
  );
};

export default Body;
