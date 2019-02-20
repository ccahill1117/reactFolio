import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './lib/Header';
import Landing from './lib/Landing';
import Footer from './lib/Footer';
import Background from './lib/Background';
import Interest from './lib/Interests';
import Project from './lib/Projects';
import Bio from './lib/Bio';
import Fun from './lib/Fun';
import NewItemControl from './lib/NewItemControl';
import ItemList from './lib/ItemList';
import Contact from './lib/Contact';
import Error404 from './lib/Error404';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterItemList: []
    };
    this.handleAddingNewItemToList = this.handleAddingNewItemToList.bind(this);
  }

  handleAddingNewItemToList(newItem){
    var newMasterItemList = this.state.masterItemList.slice();
    newMasterItemList.push(newItem);
    this.setState({masterItemList: newMasterItemList});
  }

    render(){
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

                <Route exact path='/fun' render={()=><ItemList itemList={this.state.masterItemList} />} />

                <Route exact path='/newitem' render={()=><NewItemControl onNewItemCreation={this.handleAddingNewItemToList} />} />


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
    }

}


export default App;
