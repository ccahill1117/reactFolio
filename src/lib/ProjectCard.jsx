import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';




function ProjectCard(props){

  return (

        <div>
          <Card style={{width: '350px'}}>
            <CardTitle
              avatar="https://placeimg.com/80/80/animals"
              title="Avatar style title"
              subtitle="Subtitle here"
            />
            <CardMedia
              aspectRatio="wide"
              image="https://placeimg.com/800/450/nature"
            />
            <CardTitle
              title="Title goes here"
              subtitle="Subtitle here"
            />
            <CardText>
              <p>{props.title}</p>
              <p>{props.text}</p>
              <p>{props.link}</p>

            </CardText>
          </Card>
        </div>


  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
