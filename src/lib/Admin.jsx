import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function Admin(props){
  let selectedItemContent = null;
  if (props.selectedItem != null){
    selectedItemContent =  <ItemDetail selectedItem={props.selectedItem} />;
  }
  return (
    <div>
      <h3>Admin</h3>
      {selectedItemContent}
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
  onItemSelection: PropTypes.func.isRequired,
  selectedItem: PropTypes.object

};

export default Admin;
