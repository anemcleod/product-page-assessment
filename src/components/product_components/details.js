
const Details = ({product}) => {
    return (
        <div className="product-description">
            {product.name}

            {
                product.tags.map((tag, index) => {
                    return (
                    <div className="product-tags" key={index}>
                        {tag}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Details;