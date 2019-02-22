
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import Moment from 'moment';

function ItemList(props){

  return (
    <div>
      <hr/>
      {props.itemList.map((item) =>
        <Item name={item.name}
          blah={item.blah}
          formattedWaitTime={item.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={item.id}
         onItemSelection={props.onItemSelection}/>
      )}
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onItemSelection: PropTypes.func


};

export default ItemList;
