import { useState } from 'react';
import './App.css';
import {RatingForm} from './components/ratingform';
import {ThanksForm} from './components/thanksform';

function App() {

  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingSelected(rating) {
    setSelectedRating(rating);
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  const createRatingForm = () => {
    return <RatingForm 
              selectedRating={selectedRating} 
              onRatingSelected={handleRatingSelected} 
              onRatingSubmitted={handleSubmit}/>
  }

  const createThanksForm = () => {
    return <ThanksForm selectedRating={selectedRating} />;
  }

  return (
    <div className="App">
      {!isSubmitted ? createRatingForm() : createThanksForm()}
    </div>
  );
}

export default App;
