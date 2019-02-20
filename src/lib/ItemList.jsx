
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props){
  console.log(props.itemList);
  return (
    <div>
      <hr/>
      {props.itemList.map((item, index) =>
        <Item name={item.name}
          blah={item.blah}
          key={item.id}/>
      )}
    </div>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;
