import marchexpo from '../assets/icons/marchExpo.png';
import arrow from '../assets/icons/arrow_right.png';

const Offers = () => {
    return (
        <div className="shipping-offers">
            <img src={marchexpo} alt="march expo"/>
            <ul>
                <li>Free shipping (up to $40)</li>
                <li>On-time delivery guaranteed</li>
            </ul>
            <img src={arrow} alt="arrow"/>
    </div>
    )
}

export default Offers