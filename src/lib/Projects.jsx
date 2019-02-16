import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProjectCard from './Projects';


function Project(){
  var projectCardGrid = {
      color: 'blue',
      display: 'grid',
      gridGap: '1em',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      justifyContent: 'center',
  }

  const myProjects = [
    {
      title: "oh",
      text: "fun",
      link: "www.christophercahill.co",
    },
    {
      title: "another",
      text: "funny",
      link: "thing.com",
    }
  ];


  return (
    <div>

        {myProjects.map((project, index) =>

            <ProjectCard
              title={project.title}
              key={index}
              >

            </ProjectCard>

        )}




    </div>
  );


}

export default Project;
