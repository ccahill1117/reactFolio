import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

function Admin(props){

  return (
    <div>
      <h3>Admin</h3>
      <ItemList itemList={props.itemList}
        currentRouterPath={props.currentRouterPath}
        />
      <hr />
      <ItemDetail />
      <hr/>
    </div>
  );
}


Admin.propTypes = {
  itemList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired

};

export default Admin;
