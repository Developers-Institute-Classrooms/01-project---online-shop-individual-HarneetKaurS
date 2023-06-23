import "./Product.css";

const Product = ({ src, name, description, price, onCheckout }) => {
  return (
    <div className="products-container">
      <nav className="product-grid-item">
        <img className="product-image" src={src} alt={name} width="150" />
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="buy-now" onClick={onCheckout}>
          Buy now{" "}
        </button>
      </nav>
    </div>
  );
};
export default Product;
