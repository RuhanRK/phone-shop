import React from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="phone store logo" className="logo" />
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ml-5">
                        <Link className="nav-item nav-link" to="/">
                            Products
                        </Link>
                    </div>
                </div>
                <Link to="/cart" className="nav-item nav-link ml-auto">
                    <button className="btn btn-primary">
                        <i className="fas fa-cart-plus" /> My Cart
                    </button>
                </Link>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
