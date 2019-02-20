import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.blah}</em></p>
      <hr/>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  blah: PropTypes.string.isRequired,

};

export default Item;
