import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Footer(){
  return (
    <div>
      Copyright Christopher Thomas Cahill 2019
      <br></br>
      <Link to="/contact">Reach out ...</Link>
      <hr />
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default Footer;
