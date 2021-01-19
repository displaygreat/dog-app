import React from 'react';
import { Card } from 'react-bootstrap';
import './BreedCard.css';

class BreedCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const breedName = this.props.breed.breedName;
  
    return(
    <Card style={{ width: '18rem' }}>
        <div className="img-wrap">
          <Card.Img className="dog-img" variant="top" src={this.props.breed.breedImage} />
        </div>
        <Card.Body>
          <Card.Title>{breedName[0].toUpperCase()+breedName.slice(1)}</Card.Title>
          <Card.Text>Best Breed</Card.Text>
        </Card.Body>
    </Card>
    )
  }
}

export default BreedCard;