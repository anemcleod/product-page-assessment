import check from '../../assets/icons/check.png';

const Summary = ({summary}) => {
    return (
        <div className="product-props">
            {
                summary.ready_to_ship ? (
                    <div className="product-prop primary-prop">Ready to Ship</div>
                ) : null 
            }
            {
                summary.in_stock ? (
                    <div className="product-prop secondary-prop"><img src={check} alt="check"/>In Stock</div>
                ) : null 
            }
            {
                summary.fast_dispatch ? (
                    <div className="product-prop secondary-prop"><img src={check} alt="check"/>Fast Dispatch</div>
                ) : null 
            }
        
        </div>
    )
}

export default Summary