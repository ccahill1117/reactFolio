import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './lib/Header';
import Landing from './lib/Landing';
import Footer from './lib/Footer';
import Background from './lib/Background';
import Interest from './lib/Interests';
import Project from './lib/Projects';
import Bio from './lib/Bio';
import Contact from './lib/Contact';
import Error404 from './lib/Error404';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';



const App = () => {

  return (

  <div className="App">
    <div className="wrapper">

      <div className="header">
        <Header />
        <hr />
      </div>

      <div className="switch">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/background' component={Background} />
          <Route exact path='/interest' component={Interest} />
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/project' component={Project} />
          <Route exact path='/contact' component={Contact} />

          <Route component={Error404} />
        </Switch>
      </div>

      <div className="footer">
        <hr />
        <Footer />
      </div>

    </div>
  </div>



);


};


export default App;
