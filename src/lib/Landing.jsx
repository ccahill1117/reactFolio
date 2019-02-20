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
        <h2>
          <Link to="/interest">See my interests</Link>
        </h2>
      </div>
      <div>
        <h2>
          <Link to="/bio">My biography</Link>
        </h2>
      </div>
      <div>
        <h2>
          <Link to="/project">Some projects I've worked on</Link>
        </h2>
    </div>
      <div>
        <h2>
          <Link to="/fun">Messages from friends</Link>
        </h2>
      </div>
      <div>
        <h2>
          <Link to="/newitem">Leave a message on my page!</Link>
        </h2>
      </div>

    </div>
  );
}

export default Landing;
