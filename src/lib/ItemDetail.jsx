import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function ItemDetail(props){
  return (
    <div>
      <h2>something something ticket details</h2>
    </div>
  );
}


ItemDetail.propTypes = {
  name: PropTypes.string,
  blah: PropTypes.string,
  currentRouterPath: PropTypes.string

};

export default ItemDetail;
