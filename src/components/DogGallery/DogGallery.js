import React from 'react';
import { Container } from 'react-bootstrap';
import DogCard from '../DogCard/DogCard';
import './DogGallery.css';

class DogGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    
    return(
      <Container>
        <div className="c-dog-gallery">
          <h2 className="subtitle-dog my-5">Dog Gallery</h2>
          <div className="cards">
              {/* {dogGallery.map((dog,index) => {
                return <DogCard key={index} dog={dog} ></DogCard>
              })} */}
          </div>
        </div>
      </Container>
    )
  }
}

export default DogGallery;
