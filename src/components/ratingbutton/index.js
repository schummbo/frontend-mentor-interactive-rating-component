import './ratingbutton.css';

export const RatingButton = ({text, value, isSelected, onSelected}) => {

    let className = isSelected ? "selected" : "unselected";

    className = "rating-button " + className;

    return <button 
            onClick={(e) => { onSelected(value); }} 
            value={value}
            className={className}>{text}</button>;
}