const Shipping = ({shipping}) => {
    return (
        <div className="product-purchase-container">
            <div className="shipping-method">
                <div>Ship to <span>{shipping.method.country}</span> by <span>{shipping.method.title}</span></div>
                <div>{`${shipping.method.cost.currency.symbol} ${shipping.method.cost.value}`}</div>
            </div>  

            <div className="shipping-lead">{`Lead time ${shipping.lead_time.value} icon`}</div>
            
            <div className="shipping-time">{`Shipping time ${shipping.method.shipping_time.value} icon`}</div>

            <div className="buttons-container">
                <button>Login to Purchase</button>
                <button>icon Contact the Supplier</button>
            </div>
        </div>
    )
}

export default Shipping;