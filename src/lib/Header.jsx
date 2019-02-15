import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};


function Header(props){
  const { classes } = props;

  return (
    <div>
      <Typography component="h3" variant="h2" gutterBottom>
        Christopher Thomas Cahill
      </Typography>
    </div>
  );
}

export default Header;
