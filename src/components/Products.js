import React from 'react';
import './Products.css'; 

function Products() {
  return (
    <section className="products">
      {['product1.jpg', 'product2.jpg', 'product3.jpg', 'product4.jpg'].map((product, index) => (
        <div className="product" key={index}>
          <img src={`/path-to-your-image/${product}`} alt={`Product ${index + 1}`} />
          <a href="#" className="btn">Shop Now</a>
        </div>
      ))}
    </section>
  );
}

export default Products;
