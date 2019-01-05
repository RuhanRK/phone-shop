import React from "react";
import CartItem from "./CartItem";

const CartList = ({ value }) => {
    const { cart } = value;
    return (
        <React.Fragment>
            <div className="container-fluid">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} value={value} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default CartList;
