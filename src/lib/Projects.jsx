import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Project(){
  return (
    <div style={{
      color: 'blue',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      justifyContent: 'center',

    }}>
      <div>
        <h2>Project I worked on</h2>
      </div>
      <div>
        <h2>Project I worked on</h2>
      </div>
      <div>
        <h2>Project I worked on</h2>
      </div>


    </div>
  );
}

export default Project;
