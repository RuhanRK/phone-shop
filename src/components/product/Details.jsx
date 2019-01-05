import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

export default class Details extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {
                        id,
                        company,
                        img,
                        info,
                        price,
                        title,
                        inCart
                    } = value.details;
                    const { handleCart, openModal } = value;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img
                                        src={img}
                                        alt={title}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3>Model: {title}</h3>
                                    <h4 className="text-muted mt-3 mb-2">
                                        Made By: <span>{company}</span>
                                    </h4>
                                    <h4 className="text-info">
                                        <strong>
                                            Price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some Info About Product:{" "}
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* button----- */}
                                    <div>
                                        <Link to="/">
                                            <button className="btn btn-secondary m-2">
                                                Back To Products
                                            </button>
                                        </Link>
                                        <button
                                            disabled={inCart}
                                            className="btn cart-btn btn-success"
                                            onClick={() => {
                                                handleCart(id);
                                                openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "Add To Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
