import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ConfirmQuestion(props) {
  return(
    <div>
      <p>Would you like to leave a message on my page?</p>
      <button onClick={props.onTroubleShootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmQuestion.propTypes = {
  onTroubleShootingConfirmation: PropTypes.func
};


export default ConfirmQuestion;
