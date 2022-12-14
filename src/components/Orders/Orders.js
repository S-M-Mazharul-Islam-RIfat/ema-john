import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb'

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        cart.map(product => <ReviewItem
                            product={product}
                            key={product.id}
                            handleRemoveItem={handleRemoveItem}
                        ></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No items for review. Please <Link to="/">Shop More</Link></h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart clearCart={clearCart} cart={cart}>
                        <Link to="/shipping">
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;