import Product from "./Product";
import { checkout } from "../services/checkout";
import "./Products.css"

const Products = ({ products }) => {
    return (
      <>
       
        <nav className="product-grid">
          {products.map((product) => {
            const {
              id,
              name,
              description,
              src = product.images[0],
              price = product.prices[0].unit_amount / 100,
              priceId = product.prices[0].id,
            } = product;
            return (
              <Product
                key={id}
                name={name}
                description={description}
                src={src}
                price={price}
                onCheckout={() => checkout(priceId)}
              />
            );
          })}
        </nav>
      </>
    );
  };
export default Products;  