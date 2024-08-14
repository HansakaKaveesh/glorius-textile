import React from 'react';
import './Products.css'; 

function Products() {
  return (
    <section className="products">
      {['Rectangle90.jpeg', 'Rectangle91.jpeg', 'Rectangle90.jpeg', 'Rectangle91.jpeg'].map((product, index) => (
        <div className="product" key={index}>
          <img src={`/img/${product}`} alt={`Product ${index + 1}`} />
          <div class="overlay">
          <h2>CUSTOM ITEMS</h2>
          <a href="#" className="btn">Shop Now</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
