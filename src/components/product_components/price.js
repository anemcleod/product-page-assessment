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
            <div>
                <span className="price">{`${symbol} ${Math.min(...priceRange)} - ${symbol} ${Math.max(...priceRange)}`}</span>
                <span className="secondary-price">/option <span className="option-price">{optionKeys.length} Options</span> (Min.Order)</span>  
            </div>
            <div className="old-price"> {`${symbol} ${Math.min(...oldPriceRange)} - ${symbol} ${Math.max(...oldPriceRange)}`}</div>
        </div>
    )
}

export default Price;