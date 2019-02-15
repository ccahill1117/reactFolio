import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Bio(){
  return (
    <div style={{
      color: 'blue',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      justifyContent: 'center',

    }}>
      <div>
        <h2>Something about me...</h2>
      </div>
      <div>
        <h2>Something about me...</h2>
      </div>
      <div>
        <h2>Something about me...</h2>
      </div>


    </div>
  );
}

export default Bio;
