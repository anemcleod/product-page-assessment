import Qty from './qty';

const Options = ({options}) => {
    return (
        <div className="product-options">
        <div>Options</div>
        <div>
            {
                Object.keys(options).map((option, index) => {
                    return (
                        <div className="product-option" key={index}>
                            <div>{options[option].label}</div>
                            <div>{`${options[option].price.currency.symbol} ${options[option].price.value}`}</div>
                            <Qty
                                min={0}
                                max ={3}
                                step={1}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Options