import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Item(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.blah}</em></p>
      <p>{props.formattedWaitTime} ago</p>
      <hr/>
    </div>
  );
}


Item.propTypes = {
  name: PropTypes.string.isRequired,
  blah: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired

};

export default Item;
