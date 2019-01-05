import React from "react";
const EmptyCart = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center">
                        <h1 className="text-warning">Your Cart is Empty</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmptyCart;
