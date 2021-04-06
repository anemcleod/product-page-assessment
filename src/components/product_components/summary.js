import check from '../../assets/icons/check.png';

const Summary = ({summary}) => {
    return (
        <div className="product-props">
            {
                summary.ready_to_ship ? (
                    <div>Ready to Ship</div>
                ) : null 
            }
            {
                summary.in_stock ? (
                    <div><img src={check}/>In Stock</div>
                ) : null 
            }
            {
                summary.fast_dispatch ? (
                    <div><img src={check}/>Fast Dispatch</div>
                ) : null 
            }
        
        </div>
    )
}

export default Summary