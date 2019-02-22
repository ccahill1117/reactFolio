import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function Admin(props){

  return (
    <div>
      <h3>Admin</h3>
      <ItemList
        itemList={props.itemList}
        currentRouterPath={props.currentRouterPath}
        onItemSelection={props.onItemSelection}
        />
      <hr />
      <ItemDetail />
      <hr/>
    </div>
  );
}


Admin.propTypes = {
  itemList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onItemSelection: PropTypes.func.isRequired

};

export default Admin;
