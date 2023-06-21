const Product = ({ src, name, description, price, onCheckout}) => {
    return (
      <li className="product-grid-item">
        <img src={src} alt={name} width="150" />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={onCheckout}>Buy now </button>
      </li>
    );
  };
  export default Product;