import { React, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import FilterBy from "./components/FilterBy";





// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

import {filterByCategory} from "./services/filterByCategory"; 
 
function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts]= useState([]);

const onFilterProducts = (filterBy) =>
setFilteredProducts(filterByCategory(products, filterBy));

 
 useEffect(() => {
   const loadData = async () => {
      const products = await getProducts();
     
      console.log(products);
     setProducts(products);
     setFilteredProducts(products);
   
    };

   loadData();
  }, []);

  return (
    <div className="container">
     
    < Header />
    <h1> Welcome to Travel Accessories store</h1>
    <FilterBy setFilterBy={onFilterProducts} />
    <Products products={products} />
    </div>
  
  );
}

export default App;
