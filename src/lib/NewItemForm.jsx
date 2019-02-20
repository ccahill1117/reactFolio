import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';


function NewItemForm(props){
  let _name = null;
  let _blah = null;

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: _name.value, blah: _blah.value, id: v4(), timeCreated: new Moment()});
    _name.value = '';
    _blah.value = '';

  }

  return (
    <div>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Your name'
          ref={(input) => {_name = input;}}/>
        <br></br>
        <textarea
          type='text'
          id='blah'
          placeholder='Your message!'
          ref={(textarea) => {_blah = textarea;}}/>
        <br></br>
        <button type='submit'>Leave your message!</button>
      </form>
    </div>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;
