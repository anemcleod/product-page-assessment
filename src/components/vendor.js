import shield from '../assets/svg/shield.svg'
import mastercard from '../assets/svg/mastercard.svg'
import visa from '../assets/svg/visa.svg'
import applepay from '../assets/svg/applepay.svg'

const Vendor = () => {
    return (
        <div className="vendor-details">
            <div>
                <img src={shield}/>
                <span>Trade Assurance</span> protects your Alibaba.com orders
            </div>

            <div>
                Payments:
                <img src={visa}/>
                <img src={mastercard}/>
                <img src={applepay}/>
            </div>
            
            <div>Alibaba.com Logistics</div>
            <div>Inspection Solutions</div>
        </div>
    )
}

export default Vendor