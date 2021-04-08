import marchexpo from '../assets/icons/marchExpo.png';
import arrow from '../assets/icons/arrow_right.png';

const Offers = () => {
    return (
        <div className="shipping-offers">
            <img className="march-expo" src={marchexpo} alt="march expo"/>
 
                <div className="offers-summary">Free shipping (up to $40)</div>
                <div className="offers-summary optional-offers-summary">On-time delivery guaranteed</div>
        
            <img className="arrow" src={arrow} alt="arrow"/>
    </div>
    )
}

export default Offers