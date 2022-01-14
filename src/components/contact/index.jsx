import { makeStyles } from '@mui/styles';
import React from 'react';
import {
  Instagram,
  Language,
  LinkedIn,
  Email,
  GitHub,
} from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'center',
  },
  hrefItem: {
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    fontSize: '4rem',
    textDecoration: 'none',
    padding: '0.5rem 0.4rem',
    margin: '1.5rem 38vw',
    '&:hover': {
      borderBottom: '0.1rem solid orange',
      paddingBottom: '0.4rem',
    },
  },
  icon: {
    fontSize: '2.5rem !important',
  },
});
function Contact() {
  const classes = useStyles();
  const contact = [
    {
      icon: <Instagram className={classes.icon} />,
      link: 'https://www.instagram.com/hopansh_photography/',
    },
    {
      icon: <Email className={classes.icon} />,
      link: 'mailto:hopansh.gahlot@gmail.com',
    },
    {
      icon: <Language className={classes.icon} />,
      link: 'www.hopanshphotography.ga',
    },
    {
      icon: <LinkedIn className={classes.icon} />,
      link: 'https://www.linkedin.com/in/hopansh-gahlot-596406183/',
    },
    {
      icon: <GitHub className={classes.icon} />,
      link: 'http://github.com/hopansh',
    },
  ];
  return (
    <Grid container justifyContent='center'>
      {contact.map((el) => {
        return (
          <Grid item xs={12}>
            <a href={el.link} className={classes.hrefItem}>
              {el.icon}
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Contact;
