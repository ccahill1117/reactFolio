
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
          key={item.id}/>
      )}
    </div>
  );
}



ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;
