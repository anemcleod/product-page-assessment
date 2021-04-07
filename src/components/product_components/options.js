import Qty from './qty';

const Options = ({product}) => {
    return (
        <div className="product-options">
        <div>Options</div>
        <div>
            {
                Object.keys(product.options).map((option, index) => {
                    return (
                        <div className="product-option" key={index}>
                            <div>{product.options[option].label}</div>
                            <div>{`${product.options[option].price.currency.symbol} ${product.options[option].price.value}`}</div>
                            <Qty
                                min={0}
                                max ={10}
                                step={1}
                                product={product}
                                option={product.options[option].label}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Options