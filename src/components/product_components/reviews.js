import star from '../../assets/icons/star.png';

const Reviews = ({reviews}) => {
    return (
        <div className="product-reviews">
            <div>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
                <img src={star} alt="star"/>
            </div>
            <div>{reviews.rating}</div>
            <div>{reviews.count} reviews</div>
            <div>{reviews.total_buyers} buyers</div>
        </div>
    )
}

export default Reviews;