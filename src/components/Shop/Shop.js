import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products,setProducts] = useState(firstTen);
    return (
        <div class='shop-container'>
            <div className="product-container">
            {
               products.map(productVar => <Product product={productVar}></Product>)
            }
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Shop;