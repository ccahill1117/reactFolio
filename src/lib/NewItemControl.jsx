import React from 'react';
import ConfirmQuestion from './ConfirmQuestion';
import NewItemForm from './NewItemForm';
import PropTypes from 'prop-types';

class NewItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = <NewItemForm onNewItemCreation={this.props.onNewItemCreation}/>;
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewItemControl.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemControl;
