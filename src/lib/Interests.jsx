import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InterestCard from './InterestCard';

const styles = {
  card: {
  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: "red",
  },
  pos: {
    marginBottom: 12,
  },
};

const myInterests = [
  {
    title: "oh",
    text: "fun",
    link: "www.christophercahill.co",
  },
  {
    title: "another",
    text: "funny",
    link: "thing.com",
  },
  {
    title: "oh",
    text: "fun",
    link: "www.christophercahill.co",
  },
  {
    title: "another",
    text: "funny",
    link: "thing.com",
  },
  {
    title: "oh",
    text: "fun",
    link: "www.christophercahill.co",
  },
  {
    title: "another",
    text: "funny",
    link: "thing.com",
  },
];

function Interest(props){
  return (

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 300px)',
      justifyContent: 'center',
      }}>
      {myInterests.map((item, i) =>
        <div>
          <InterestCard
            title={item.title}
            text={item.text}
            link={item.link}
            key={i}
            />
        </div>
        )}

    </div>
  );
}



export default Interest;
