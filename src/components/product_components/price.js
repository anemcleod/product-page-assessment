const Price = ({options}) => {
    return (
        <div className="product-price">
            <div>dynamic new price range</div>
            <div>/options <span>{Object.keys(options).length} Options</span> (Min.Order)</div>    
            <div>dynamic old price range</div>
        </div>
    )
}

export default Price;