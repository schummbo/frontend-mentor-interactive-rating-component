import thankYouImage from '../../images/illustration-thank-you.svg';
import './thanksform.css';

export const ThanksForm = ({ selectedRating }) => {
    return (
        <div className='thanks-container'>
            <img src={thankYouImage} />
            <div className='rating-selection'>
                You selected {selectedRating} out of 5
            </div>
            <h2>Thank you!</h2>
            <div>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </div>
        </div>
    )
}