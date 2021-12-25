import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyle = makeStyles({
  root: {
    height: "90vh",
  },
  aboutText: {
    display: "flex",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
    color: "white",
    padding: "3rem 2rem",
    lineHeight: "2",
  },
  aboutImage: {
    fontSize: "8rem",
    fontWeight: "100",
    textTransform: "uppercase",
  },
});
const About = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item xs={12} lg={6}>
          <div className={classes.aboutImage}>
            <div>About</div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.aboutText}>
            Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ut
            pharetra sit amet aliquam id diam maecenas ultricies mi.
            Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras
            sed felis eget. Amet risus nullam eget felis eget nunc. Lacus
            vestibulum sed arcu non odio euismod. Consectetur adipiscing elit
            duis tristique.Pharetra magna ac placerat vestibulum lectus mauris
            ultrices. Ut pharetra sit amet aliquam id diam maecenas ultricies
            mi. Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis
            cras sed felis eget. Amet risus nullam eget felis eget nunc. Lacus
            vestibulum sed arcu non odio euismod. Consectetur adipiscing elit
            duis tristique.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
