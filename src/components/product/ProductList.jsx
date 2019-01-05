import React, { Component } from "react";
import Product from "./Product";
import Title from "../Title";
import { Consumer } from "./../../context";

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-3">
                    <div className="container">
                        <Title name="Our" title="Products" />
                        <div className="row">
                            <Consumer>
                                {value => {
                                    const {
                                        products,
                                        handleDetail,
                                        handleCart,
                                        openModal,
                                        closeModal
                                    } = value;
                                    return products.map(product => (
                                        <Product
                                            key={product.id}
                                            product={product}
                                            handleDetail={handleDetail}
                                            handleCart={handleCart}
                                            openModal={openModal}
                                            closeModal={closeModal}
                                        />
                                    ));
                                }}
                            </Consumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
