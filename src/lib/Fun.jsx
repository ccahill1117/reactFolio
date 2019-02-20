import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConfirmQuestion from './ConfirmQuestion';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import NewItemControl from './NewItemControl';
import { Switch, Route } from 'react-router-dom';

class Fun extends React.Component {


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
    <div>

      <Link to="/newitem">Create Ticket</Link>
      
    </div>
  );
}

}

export default Fun;
