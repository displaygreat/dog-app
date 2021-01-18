import React from 'react';
import axios from 'axios';
import './BreadGallery.css';
import BreedModel from '../../data-models/BreedModel';
import BreedCard from '../BreedCard/BreedCard';
import { Container } from 'react-bootstrap';

class BreedGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    }
  }

  componentDidMount() {

    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then((response) => {
      const breedsNames = response.data.message;

      for (let breed in breedsNames) {
        let breedName = breed;

        axios.get(`https://dog.ceo/api/breed/${breedName}/images`)
        .then((response) => {
          let breedImage = response.data.message[0];
          this.setState({
          breeds: this.state.breeds.concat(new BreedModel(breedName, breedImage))
          })    
        })
      }
    })
  }
  // https://dog.ceo/api/breed/hound/images/random
  render() {
    const breeds = this.state.breeds;
    console.log(breeds);
    const breedsGallery = breeds.map((breed) => {
      return <BreedCard breed={breed}></BreedCard>
    })
    console.log(breedsGallery);
    return(
      <div className="c-breed-gallery">
        <Container>
          <h2>Breeds Gallery</h2>
          <div className="cards">
            {breedsGallery}
          </div>
        </Container>
      </div>
    )
  }
}

export default BreedGallery;

// git remote remove origin
// To add a remote:

// git remote add origin yourRemoteUrl
// and finally

// git push -u origin master