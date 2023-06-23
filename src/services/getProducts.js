const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/products`;

  const products = await fetch(url);
  return await products.json();
  // const products = [];

  // console.log(products);
};

export { getProducts };
