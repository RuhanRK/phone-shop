import React from "react";

const CartColumns = () => {
    return (
        <React.Fragment>
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="lead">PRODUCTS</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="lead">NAME OF PRODUCTS</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="lead">PRICE</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="lead">QUANTITY</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="lead">REMOVE</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="lead">TOTAL</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartColumns;
