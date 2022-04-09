import { RatingButton } from '../ratingbutton';
import './rating.css';

export const Rating = ({selectedRating, onRatingSelected}) => {
    return (
        <div className="rating-container">
            <RatingButton text="1" value={1} isSelected={selectedRating === 1} onSelected={onRatingSelected} />
            <RatingButton text="2" value={2} isSelected={selectedRating === 2} onSelected={onRatingSelected}/>
            <RatingButton text="3" value={3} isSelected={selectedRating === 3} onSelected={onRatingSelected}/>
            <RatingButton text="4" value={4} isSelected={selectedRating === 4} onSelected={onRatingSelected}/>
            <RatingButton text="5" value={5} isSelected={selectedRating === 5} onSelected={onRatingSelected}/>
        </div>
    );
}