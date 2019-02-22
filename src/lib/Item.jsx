import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Item(props){
    const itemInformation =
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.blah}</em></p>
      <p>{props.formattedWaitTime} ago</p>
      <hr/>
    </div>;
    if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onItemSelection({name: props.name, blah: props.blah, formattedWaitTime: props.formattedWaitTime});}}>
        {itemInformation}
      </div>
    );
  } else {
    return (
      <div>
        {itemInformation}
      </div>
    );
  }

}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  blah: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onItemSelection: PropTypes.func

};

export default Item;
