import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h3>This is Cart</h3>
            {
                cart.map(tShirt=><p>{tShirt.name}</p>)
            }
        </div>
    );
};

export default Cart;