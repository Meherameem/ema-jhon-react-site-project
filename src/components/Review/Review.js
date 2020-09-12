import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link, useHistory } from 'react-router-dom';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState([false]);
    const history = useHistory()

    const handleProceedCheckOut = () => {
        history.push('/shipment')
        console.log('somossa ki bhai?');
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
        //cart
        const saveCart = getDatabaseCart();
        const productKeys =Object.keys(saveCart);
        const cartProducts = productKeys.map(key => 
            {   
                const product = fakeData.find(pd => pd.key === key);
                product.quantity = saveCart[key];
                return product;
            });
        setCart(cartProducts);
    },[])

    return (
        <div className = 'twin-container'>
           <div className = 'product-container'>
           {
                cart.map(pd => <ReviewItem
                    key={pd.key} 
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItem>)
            }
           </div>
           <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'><button onClick = {handleProceedCheckOut} className='btn-add-to-cart'>Proceed to CheckOut</button></Link>
                </Cart>
           </div>
        </div>
    );
};

export default Review;