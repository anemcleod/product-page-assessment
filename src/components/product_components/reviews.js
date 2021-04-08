import star from '../../assets/icons/star.png';

const Reviews = ({reviews}) => {
    let stars = [];
    for(let i = 1; i < reviews.rating; i++){
        stars.push(1);
    }
    if(reviews.rating % 1 > 0){
       stars.push (reviews.rating % 1);
    }

    return (
        <div className="product-reviews">
            <div className="star-rating">
            {
                stars.map((e,i)=>{
                        return (
                            <div 
                                className="star-container"
                                style={{width: `${14*e}px`}}
                                key={i}>
                                <img 
                                    className="star"
                                    src={star} 
                                    alt="star"/>
                            </div>
                        )
                })
            }
            </div>
            <div className="review-rating">{reviews.rating}</div>
            <div className="review-count">{reviews.count} reviews</div>
            <div className="buyer-count">{reviews.total_buyers} buyers</div>
        </div>
    )
}

export default Reviews;