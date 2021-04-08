
const Details = ({product}) => {
    return (
        <div className="product-description">
            {product.name}

            {
                product.tags.map((tag, index) => {
                    return (
                    <span className="product-tags" key={index}>
                        {tag}
                    </span>
                    )
                })
            }
        </div>
    )
}

export default Details;