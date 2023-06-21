import Product from "./Product";
import { checkout } from "../services/checkout";

const Products = ({ products }) => {
    return (
      <>
       
        <ul className="product-grid">
          {products.map((product) => {
            const {
              id,
              name,
              description,
              image = product.images[0],
              price = product.prices[0].unit_amount / 100,
              priceId = product.prices[0].id,
            } = product;
            return (
              <Product
                key={id}
                name={name}
                description={description}
                src={image}
                price={price}
                onCheckout={() => checkout(priceId)}
              />
            );
          })}
        </ul>
      </>
    );
  };
export default Products;  