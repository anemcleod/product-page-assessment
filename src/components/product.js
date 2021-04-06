import Vendor from './vendor';
import Offers from './shippingOffers';
import Discount from './product_components/discount';
import Options from './product_components/options';
import Shipping from './product_components/shipping';
import Image from './product_components/image.js';
import Summary from './product_components/summary.js';
import Details from './product_components/details.js';
import Reviews from './product_components/reviews.js';
import Price from './product_components/price.js';

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
                        <Options options={product.options} />
                        <Vendor/>
                </div>
                <Shipping shipping={product.shipping}/>        
        </div>
    )
}

export default Product