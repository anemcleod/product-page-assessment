import shield from '../assets/svg/shield.svg'
import mastercard from '../assets/svg/mastercard.svg'
import visa from '../assets/svg/visa.svg'
import applepay from '../assets/svg/applepay.svg'

const Vendor = () => {
    return (
        <div className="vendor-details">
            <div>
                <img src={shield} alt="shield"/>
                <span className="trade-assurance">Trade Assurance</span> protects your Alibaba.com orders
            </div>

            <div>
                <span className="payment-types">Payments:</span> 
                <img src={visa} alt="visa"/>
                <img src={mastercard} alt="mastercard"/>
                <img src={applepay} alt="applepay"/>
            </div>
            <div className="vendor-notes">
                <div>Alibaba.com Logistics</div>
                <div>Inspection Solutions</div>
            </div> 
            
        </div>
    )
}

export default Vendor