
const Image = ({images}) => {
    return (
        <div className="product-image-container">
            {
                images.map((image, index) => {
                    return (
                        <img src={image.main} key={index} alt="productgit "/>
                    )
                })
            }
        </div>
    ) 
}

export default Image
