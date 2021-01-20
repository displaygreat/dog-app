import React from 'react';
import axios from 'axios';
import './BreadGallery.css';
import BreedModel from '../../data-models/BreedModel';
import BreedCard from '../BreedCard/BreedCard';
import DogModel from '../../data-models/DogModel';
import DogCard from '../DogCard/DogCard';
import { Container, Form, Button } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';

class BreedGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      dogs: [],
      value: ''
    }
  }

  addDog = (e) => {
    let dogBreed = e.target.getAttribute("data-breed");
    axios.get(`https://dog.ceo/api/breed/${dogBreed}/images`)
        .then((result) => {
          console.log(result);
          let arrImages = result.data.message;
          this.setState({
          dogs: this.state.dogs.concat(new DogModel(dogBreed, arrImages))
          })    
    })
    console.log(dogBreed);
  }

  searchByBreed = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState({
      value: value
    })
  }

  // updateImages = () => {
  //   this.componentDidMount();
  // }

  // handlerBreed = () => {
  //   let breed = this.state;
  //   console.log(breed);
  // }

  componentDidMount() {

    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then((response) => {
      const breedsNames = response.data.message;

      for (let breed in breedsNames) {
        let breedName = breed;

        axios.get(`https://dog.ceo/api/breed/${breedName}/images`)
        .then((result) => {
          let arrImages = result.data.message;
          // let breedImage = response.data.message[0];
          let randomImageIndex = Math.floor(Math.random() * arrImages.length);
          
          // for (let i=0; i<arrImages.length; i++) {
          //   let imageObj = { imageSrc: arrImages[i], imageKey: uuidv4() };
          //   console.log(imageObj);
          // }
          
          let breedImage = arrImages[randomImageIndex]
          this.setState({
          breeds: this.state.breeds.concat(new BreedModel(breedName, breedImage, arrImages))
          })
        })
      }
    })
  }

  render() {
    const filteredBreedGallery = this.state.breeds.filter((breed) => {
      return breed.breedName.toLowerCase().indexOf(this.state.value.toLowerCase()) !==-1 
    })

    const dogGallery = this.state.dogs;

    return(
      <div className="c-breed-gallery">
        <Container>
          <h2 className="subtitle my-5">Breeds Gallery</h2>
          <div className="nav">
            <Form.Control className="w-25" type="search" placeholder="Search by breed" onChange={this.searchByBreed}/>
            <Button variant="outline-light" onClick={this.updateImages}>Update Images</Button>
          </div>
          <div className="cards">
            {filteredBreedGallery.map((breed, index) => {
              return <BreedCard key={index} breed={breed} addDog={this.addDog}></BreedCard>
            })}

            {/* {dogGallery.map((dog,index) => {
              return <DogCard key={index} dog={dog} ></DogCard>
            })} */}
          </div>
          <div className="c-dog-gallery">
          <h2 className="subtitle-dog my-5">Dog Gallery</h2>
          <div className="cards">
              {dogGallery.map((dog,index) => {
                return <DogCard key={index} dog={dog} ></DogCard>
              })}
          </div>
        </div>
        </Container>
      </div>
    )
  }
}

export default BreedGallery;