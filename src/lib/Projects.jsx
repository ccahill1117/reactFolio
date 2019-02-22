import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

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

function Project(){
  var projectCardGrid = {
      color: 'blue',
      display: 'grid',
      gridGap: '1em',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      justifyContent: 'center',
  }

  return (
    <div>
        {myProjects.map((item, i) =>
            <ProjectCard
              title={item.title}
              text={item.text}
              link={item.link}
              key={i}
              />
          )}
    </div>


  );

}

export default Project;
