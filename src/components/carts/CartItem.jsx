import React from "react";
const CartItem = ({ item, value }) => {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <React.Fragment>
            <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img
                        src={img}
                        alt={title}
                        style={{ width: "5rem", height: "5rem" }}
                        className="img-fluid"
                    />
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Product: </span>
                    {title}
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">Price: </span>
                    {price}
                </div>

                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex-justify-content-center">
                        <div>
                            <span
                                className="btn btn-outline-dark mx-1"
                                onClick={() => decrement(id)}
                            >
                                -
                            </span>
                            <span
                                className="btn btn-outline-secondary mx-1 disabled"
                                aria-disabled="true"
                            >
                                {count}
                            </span>
                            <span
                                className="btn btn-outline-dark mx-1"
                                onClick={() => increment(id)}
                            >
                                +
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <div>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => removeItem(id)}
                        >
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <strong>Item Total : $ {total}</strong>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartItem;
