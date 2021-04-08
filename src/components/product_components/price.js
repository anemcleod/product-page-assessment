const Price = ({options}) => {
    let symbol;
    let priceRange = [];
    let oldPriceRange=[];
  
    let optionKeys = Object.keys(options)

    for(let i = 0; i < optionKeys.length; i++){
        priceRange.push(options[optionKeys[i]].price.value);
        oldPriceRange.push(options[optionKeys[i]].old_price.value);
        symbol = options[optionKeys[i]].price.currency.symbol;
    }

    return (
        <div className="product-price">
            <div className="price">
                {`${symbol} ${Math.min(...priceRange)} - ${Math.max(...priceRange)}`}
                <span>/options <span>{optionKeys.length} Options</span> (Min.Order)</span>  
            </div>
            <div className="old-price"> {`${symbol} ${Math.min(...oldPriceRange)} - ${Math.max(...oldPriceRange)}`}</div>
        </div>
    )
}

export default Price;