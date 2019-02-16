import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function ProjectCard(props){
  return (
    <div>
      <div>
        <div>
            <p>{props.text}</p>
              <p>{props.string}</p>
        </div>
      </div>
    </div>

  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default withStyles(ProjectCard);
