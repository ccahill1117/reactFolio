
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import Moment from 'moment';

function ItemList(props){

  return (
    <div>
      <hr/>
      {Object.keys(props.itemList).map(function(itemId) {
        var item = props.itemList[itemId];
        return <Item name={item.name}
        blah={item.blah}
        formattedWaitTime={item.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        key={itemId}
        onItemSelection={props.onItemSelection}
        itemId={itemId}/>;
      })}
    </div>
  );
}


ItemList.propTypes = {
  itemList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onItemSelection: PropTypes.func


};

export default ItemList;
