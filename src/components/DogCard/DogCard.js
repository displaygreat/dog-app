import React from 'react';
import { Card } from 'react-bootstrap';
import './DogCard.css';
import ModalDogImage from '../ModalDogImage/ModalDogImage';

export default function DogCard (props) {

  const {dog} = props;
  const [modalShow, setModalShow] = React.useState(false);
  const [imageSrc, setSrc] = React.useState('');

  const showSrc = (e) => {
    let srcImage = e.target.getAttribute("data-src");
    console.log(srcImage);
    setSrc(srcImage)
  }

  const dogBreed = dog.dogBreed[0].toUpperCase() + dog.dogBreed.slice(1, dog.dogBreed.length)
  let dogImages = dog.arrImages;
  let shortDogImages = dogImages.slice(0, 9);
  // console.log(dogImages);
  let elementDogImages = shortDogImages.map((img, index) => {
    return <Card key={index} style={{ width: '18rem' }} onClick={() => setModalShow(true)} ><div className="img-wrap" ><Card.Img className="dog-img" key={index} src={img} data-src={img} onClick={showSrc}></Card.Img></div></Card>
  })

    return(
      <div>
        <h3>{dogBreed}</h3>
        <div className="cards">
          {elementDogImages}
        </div>
        <ModalDogImage
          show={modalShow}
          onHide={() => setModalShow(false)}
          imageSrc={imageSrc}
        />
      </div>
    )
  }