import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const cellStyle = {
  cells: {
    backgroundColor: "pink",
    margin: "10px",
  },
  links: {
    textDecoration: "none",
    color: "yellow",
  }
};

function Landing(props){
  return (
    <div style={{
      color: 'blue',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      justifyContent: 'center',

    }}>
      <div style={cellStyle.cells}>
        <h2>
          <Link style={cellStyle.links} to="/interest">See my interests</Link>
        </h2>
      </div>
      <div style={cellStyle.cells}>
        <h2>
          <Link style={cellStyle.links} to="/bio">My biography</Link>
        </h2>
      </div>
      <div style={cellStyle.cells}>
        <h2>
          <Link style={cellStyle.links} to="/project">Some projects I've worked on</Link>
        </h2>
    </div>
      <div style={cellStyle.cells}>
        <h2>
          <Link style={cellStyle.links} to="/fun">Messages from friends</Link>
        </h2>
      </div>
      <div style={cellStyle.cells}>
        <h2>
          <Link style={cellStyle.links} to="/newitem">Leave a message on my page!</Link>
        </h2>
      </div>

    </div>
  );
}

export default Landing;
