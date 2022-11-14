import React from 'react';
import './Cart.css';
const Cart = ({ cart, clearCart, children }) => {
    let total = 0, shipping = 0, quantity = 0;
    for (const product of cart) {
        console.log(product)
        quantity += product.quantity;
        total += (product.price * product.quantity);
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax);
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected items : {quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : {tax}</p>
            <p>Grand Total : {grandTotal}</p>
            <button onClick={clearCart}>Clear</button>
            {
                children
            }
        </div>
    );
};

export default Cart;