import Image from './product_components/image.js';
import Summary from './product_components/summary.js';
import Details from './product_components/details.js';
import Reviews from './product_components/reviews.js';
import Price from './product_components/price.js';
import Offers from './shippingOffers';
import Discount from './product_components/discount';
import Options from './product_components/options';
import Vendor from './vendor';

const Product = ({product}) => {

    return (
        <div className="product-container">
                <Image images={product.gallery}/>               
                <div className="product-details-container">
                        <Summary summary={product.shipping.props}/>
                        <Details product={product} />
                        <Reviews reviews={product.reviews}/>
                        <Price options={product.options}/>
                        <Offers />
                        <Discount  discount={product.discount}/>
                        <Options product={product} />
                        <Vendor/>
                </div>
        </div>
    ) 
}

export default Product