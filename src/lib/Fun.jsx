import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConfirmQuestion from './ConfirmQuestions';

class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisibleOnPage: true});
    console.log('click!', this.state.formVisibleOnPage);
  }

  render(){
    return (
      <div style={{
        color: 'blue',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 200px)',
        justifyContent: 'center',

      }}>
      <div>
        <h2>new item control ! </h2>
        <strong onClick={this.handleClick}>Click me to change my state</strong>
      </div>

      </div>
    );
  }

}


export default NewItem;
