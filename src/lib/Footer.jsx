import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){
  return (
    <div>
      <Link to="/">Home Page</Link>
      <hr />
      <Link to="/background">Background</Link>

    </div>
  );
}

export default Footer;
