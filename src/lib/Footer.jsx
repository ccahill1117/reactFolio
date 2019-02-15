import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Footer(){
  return (
    <div>
      <Link to="/">Home Page</Link>
      <hr />
    </div>
  );
}

export default Footer;
