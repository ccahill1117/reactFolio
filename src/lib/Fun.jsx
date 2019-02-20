import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConfirmQuestion from './ConfirmQuestion';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import NewItemControl from './NewItemControl';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class Fun extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    masterItemList: []
  };
  this.handleAddingNewItemToList = this.handleAddingNewItemToList.bind(this);
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

render(){
  return (
    <div>

    </div>
  );
}

}

export default Fun;
