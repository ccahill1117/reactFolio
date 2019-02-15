import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './lib/Header';
import Landing from './lib/Landing';
import Footer from './lib/Footer';
import logo from './logo.svg';
import './App.css';



const App = () => {

  return (

  <div className="App">
    <div className="wrapper">

      <div>
        <Header />
        <hr />
      </div>


      <Switch>
      <Route exact path='/' component={Landing} />
      </Switch>


      <div>
        <hr />
        <Footer />
      </div>

    </div>
  </div>



);


};


export default App;
