import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Landing(){
  return (
    <div style={{
      color: 'blue',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      justifyContent: 'center',

    }}>
      <div>
        <h2>stuff</h2>
      </div>
      <div>
        <h2>stuff</h2>
      </div>
      <div>
        <h2>stuff</h2>
      </div>
      <div>
        <h2>stuff</h2>
      </div>

    </div>
  );
}

export default Landing;
