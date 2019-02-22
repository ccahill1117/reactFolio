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
import Admin from './lib/Admin';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterItemList: []
    };
    this.handleAddingNewItemToList = this.handleAddingNewItemToList.bind(this);
  }

  updateItemElapsedWaitTime() {
     console.log("check");
     let newMasterItemList = this.state.masterItemList.slice();
     newMasterItemList.forEach((item) =>
       item.formattedWaitTime = (item.timeCreated).fromNow(true)
     );
     this.setState({masterItemList: newMasterItemList})
   }

  handleAddingNewItemToList(newItem){
    var newMasterItemList = this.state.masterItemList.slice();
    newItem.formattedWaitTime = (newItem.timeCreated).fromNow(true);
    newMasterItemList.push(newItem);
    this.setState({masterItemList: newMasterItemList});
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

 componentDidMount() {
   console.log('hey');
   this.waitTimeUpdateTimer = setInterval(() =>
     this.updateItemElapsedWaitTime(),
     1000
   );
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
                 <Route path='/admin' render={(props)=><Admin itemList={this.state.masterItemList} currentRouterPath={props.location.pathname} />} />
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
