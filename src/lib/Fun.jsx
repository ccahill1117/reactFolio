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
    this.state = {

    }
  }

render(){
  return (
    <div>

    </div>
  );
}

}

Fun.propTypes = {
  ticketList: PropTypes.array,
}

export default Fun;
