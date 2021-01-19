import React from 'react';
import axios from 'axios';
import './BreadGallery.css';
import BreedModel from '../../data-models/BreedModel';
import BreedCard from '../BreedCard/BreedCard';
import { Container, Form, Button } from 'react-bootstrap';

class BreedGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      value: ''
    }
  }

  searchByBreed = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState({
      value: value
    })
  }

  // updateImages = () => {
    
  // }

  componentDidMount() {

    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then((response) => {
      const breedsNames = response.data.message;

      for (let breed in breedsNames) {
        let breedName = breed;

        axios.get(`https://dog.ceo/api/breed/${breedName}/images`)
        .then((response) => {
          let arrImages = response.data.message;
          // let breedImage = response.data.message[0];
          let randomImageIndex = Math.floor(Math.random() * arrImages.length);
          let breedImage = arrImages[randomImageIndex]
          this.setState({
          breeds: this.state.breeds.concat(new BreedModel(breedName, breedImage))
          })    
        })
      }
    })
  }

  render() {
    const filteredBreedGallery = this.state.breeds.filter((breed) => {
      return breed.breedName.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1 
    })

    return(
      <div className="c-breed-gallery">
        <Container>
          <h2 className="subtitle my-5">Breeds Gallery</h2>
          <div className="nav">
            <Form.Control className="w-25" type="search" placeholder="Search by breed" onChange={this.searchByBreed}/>
            <Button variant="outline-light" onClick={this.updateImages}>Update Images</Button>
          </div>
          <div className="cards">
            {filteredBreedGallery.map((breed, index) =>{
              return <BreedCard key={index} breed={breed}></BreedCard>
            })}
          </div>
        </Container>
      </div>
    )
  }
}

export default BreedGallery;