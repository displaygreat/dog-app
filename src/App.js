import './App.css';
import { Container, Jumbotron } from 'react-bootstrap';
import BreedGallery from './components/BreedGallery/BreedGallery';
import DogGallery from './components/DogGallery/DogGallery';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Dog Book</h1>
          <p>
            The Man's best friend
          </p>
          <button className="btn-new">Woof!</button>
        </Container>
      </Jumbotron>
      <BreedGallery />
      <DogGallery />
    </div>
    
  );
}

export default App;
