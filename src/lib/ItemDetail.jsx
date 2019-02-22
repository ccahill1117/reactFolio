import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function ItemDetail(props){
  return (
    <div>
      <h2>{props.selectedItem.name}</h2>
      <h3>{props.selectedItem.blah}</h3>
      <h4>{props.selectedItem.formattedWaitTime}</h4>
    </div>
  );
}


ItemDetail.propTypes = {
  selectedItem: PropTypes.object

};

export default ItemDetail;
