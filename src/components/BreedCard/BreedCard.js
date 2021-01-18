import React from 'react';
import { Card } from 'react-bootstrap';
import './BreedCard.css';

class BreedCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {

    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.breed.breedImage} />
        <Card.Body>
          <Card.Title>{this.props.breed.breedName}</Card.Title>
          <Card.Text>Best Breed</Card.Text>
        </Card.Body>
    </Card>
    )
  }
}

export default BreedCard;