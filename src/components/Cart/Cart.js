import React from 'react';


const Cart = (props) => {
    const cart = props.cart;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price * product.quantity;
        
    }

    let shippingCost =0;
    if(totalPrice>100){
        shippingCost = 0;
    }
    else if(totalPrice>50 && totalPrice<=100){
        shippingCost = 5.99;
    }
    else if(totalPrice>0 && totalPrice<=50){
        shippingCost = 12.99;
    }

    const tax = formatNumber( totalPrice /10);
    const totalCalculation = formatNumber(totalPrice + shippingCost + tax);

    

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price: ${formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: ${shippingCost}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: ${totalCalculation}</p>
            {props.children}
        </div>
    );
};

export default Cart;