import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ value }) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
                        <Link to="/">
                            <button
                                type="button"
                                className="btn btn-outline-danger mb-3 px-5"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-info">Sub Total: </span>
                            <strong>$: {cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className="text-info">Tax: </span>
                            <strong>$: {cartTax}</strong>
                        </h5>

                        <h5>
                            <span className="text-info">Total: </span>
                            <strong>$: {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartTotals;
