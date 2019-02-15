import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './lib/Header';
import Landing from './lib/Landing';
import logo from './logo.svg';
import './App.css';



const App = () => {

  return (

  <div className="App">
    <Header />
      <hr />
    <Switch>
      <Route exact path='/' component={Landing} />

    </Switch>

  </div>



);


};


export default App;
