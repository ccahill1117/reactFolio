import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function ProjectCard(props){

  return (

        <div>
            <p>{props.title}</p>
            <p>{props.text}</p>
            <p>{props.link}</p>
        </div>


  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
