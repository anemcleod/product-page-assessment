
import time from '../../assets/icons/time.png';

const Discount = ({discount}) => {
    return (
        <div className="product-discount">
            <div><span>{discount.amount} OFF</span></div>
            <div>Discount ends in <img src={time} alt="clock"/> {discount.end_date}</div>
        </div>
    )
}

export default Discount