
import time from '../../assets/icons/time.png';

const Discount = ({discount}) => {
    return (

            <div className="product-discount-container">
                <div className="product-discount">
                    <span className="product-discount-amount" >{discount.amount} OFF</span>
                    Discount ends in 
                </div>
                    
                <div className="product-discount"><img src={time} alt="clock"/> {discount.end_date}</div>
            </div>
        
    )
}

export default Discount