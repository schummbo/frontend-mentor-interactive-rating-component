import {Star} from '../star';
import {Rating} from '../rating';

export const RatingForm = ({
  selectedRating,
  onRatingSelected,
  onRatingSubmitted
}) => {
    return (
        <>
          <Star />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
          </p>
          <Rating selectedRating={selectedRating} onRatingSelected={onRatingSelected} />
          <button className='submit-button' onClick={onRatingSubmitted}>Submit</button>
        </>
      )
};