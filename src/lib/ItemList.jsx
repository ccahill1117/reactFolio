
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import Moment from 'moment';

function ItemList(props){

  console.log(props.itemList);
  return (
    <div>
      <hr/>
      {props.itemList.map((item) =>
        <Item name={item.name}
          blah={item.blah}
          formattedWaitTime={item.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={item.id}/>
      )}
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default ItemList;
