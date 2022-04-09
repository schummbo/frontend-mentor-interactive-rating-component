import './ratingbutton.css';

export const RatingButton = ({text, value, isSelected, onSelected}) => {

    const className = isSelected ? "selected" : "unselected";

    return <button 
            onClick={(e) => { onSelected(value); }} 
            value={value}
            className={className}>{text}</button>;
}