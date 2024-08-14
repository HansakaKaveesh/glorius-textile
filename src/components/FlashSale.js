import React from 'react';
import './FlashSale.css'; // We'll add CSS later

function FlashSale() {
  return (
    <section className="flash-sale">
      <img src="/path-to-your-image/sale-product.jpg" alt="Flash Sale" />
      <div className="flash-sale-text">
        <h2>Custom Items</h2>
        <p>Flash Sale • 50% - 70% Selected Items. Only now</p>
        <a href="#" className="btn">Shop Now</a>
      </div>
    </section>
  );
}

export default FlashSale;
