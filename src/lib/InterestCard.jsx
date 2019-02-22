import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 275,
    margin: 20,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function InterestCard(props){

  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <Typography style={styles.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" component="h3">
            {props.text}
          </Typography>
          <Typography style={styles.pos} color="textSecondary">
            {props.link}
          </Typography>
          <Typography component="p">
            <h5>some text!</h5>
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="www.google.com"><Button size="small">Learn More</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
}

InterestCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default InterestCard;
