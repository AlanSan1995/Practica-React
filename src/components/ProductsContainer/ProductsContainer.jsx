import { useEffect, useState } from "react";
import "./ProductsContainer.css";
import { productsData } from "../../data/products";
import ProductsList from "../ProductsList/ProductsList";

function ProductsContainer() {
  const [products, setProducts] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className='products_container'>
      <h2>Lista de Productos</h2>
      {products.length == 0 ? (
        <div className='loader'></div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}

export default ProductsContainer;
