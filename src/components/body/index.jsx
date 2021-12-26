import React from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../about";
import Contact from "../contact";
import Admin from "../admin";
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Container>
  );
};

export default Body;
