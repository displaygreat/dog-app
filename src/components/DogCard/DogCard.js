import React from 'react';
import { Card } from 'react-bootstrap';
import './DogCard.css';

class DogCard extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {

    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Dog</Card.Title>
          <Card.Text>Best Friend</Card.Text>
        </Card.Body>
    </Card>
    )
  }
}

export default DogCard;