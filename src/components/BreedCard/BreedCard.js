import React from 'react';
import { Card } from 'react-bootstrap';
import './BreedCard.css';
// import { v4 as uuidv4 } from 'uuid';

class BreedCard extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    const breedName = this.props.breed.breedName;
    // let breedImage = this.props.breed.breedImage;
    // breedImage = new Map();
    // for(let i=0; i<breedImage.length; i++) {
    //    breedImage.set(breedImage[i], uuidv4());
    // }
    // breedImage.forEach(function(value, key) {
    //   console.log(`${key} => ${value}`);
    // });
  
    return(
    <Card style={{ width: '18rem' }} onClick={(index) => {this.props.addDog(index)}}>
        <div className="img-wrap">
          <Card.Img className="dog-img" variant="top" src={this.props.breed.breedImage} data-breed={breedName} />
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