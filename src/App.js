import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './lib/Header';
import Landing from './lib/Landing';
import Footer from './lib/Footer';
import Background from './lib/Background';
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
