import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import psnl_bg from '../../assets/images/psnl_bg.jpg';
import React from 'react';
const useStyle = makeStyles({
  root: {
    height: '90vh',
  },
  aboutText: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: '3rem 2rem',
    lineHeight: '2',
  },
  aboutImage: {
    fontSize: '8rem',
    fontWeight: '100',
    textTransform: 'uppercase',
  },
  // bgImage: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   top: 0,
  //   left: 0,
  //   opacity: '0.2',
  //   zIndex: -1,
  //   objectFit: 'cover',
  // },
});
const About = () => {
  const classes = useStyle();
  return (
    <div>
      {/* <img className={classes.bgImage} src={psnl_bg} alt='bgImage' /> */}

      <Grid container alignItems='center' className={classes.root}>
        <Grid item xs={12} lg={6}>
          <div className={classes.aboutImage}>
            <div>About</div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.aboutText}>
            k... so there's not much to tell about me, basically am a web
            developer who do portrait photography as a hobby. Working as an
            intern at a Fin-tech company and I am in my last semester of B.Tech
            degree. I guess that's all about me.
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
