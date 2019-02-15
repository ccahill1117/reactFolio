import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function Contact(){
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 800px)',
      justifyContent: 'center',

    }}>
      <div>
        <h2>Reach out @</h2>
        <div>
          <Typography variant="h2">
            chris /
            <br></br>
            at /
            <br></br>
            christophercahill.co
          </Typography>
        </div>
      </div>




    </div>
  );
}

export default Contact;
