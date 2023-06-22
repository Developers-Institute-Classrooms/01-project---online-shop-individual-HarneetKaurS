import { React, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";



// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";


 function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

 
 useEffect(() => {
   const loadData = async () => {
      const products = await getProducts();
     
     // console.log(products);
     setProducts(products);
    };

   loadData();
  }, []);

  return (
    <div className="container">
     
    < Header />
    <h1> Welcome to Travel Accessories store</h1>
    
    <Products products={products} />
    </div>
  
  );
}

export default App;
