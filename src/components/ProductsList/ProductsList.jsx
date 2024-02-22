import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className='products_list'>
      {products.map((product, index) => (
        <div className='product_card' key={index}>
          <img src={product.image} alt='' />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
