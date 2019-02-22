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
    minWidth: 275,
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

function Interest(props){
  return (

    <div>
    <Card style={styles.card}>
    <CardContent>
      <Typography style={styles.title} color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="h2">

      </Typography>
      <Typography style={styles.pos} color="textSecondary">
        adjective
      </Typography>
      <Typography component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

    </div>
  );
}



export default Interest;
