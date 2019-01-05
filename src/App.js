import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/product/ProductList";
import Details from "./components/product/Details";
import NotFound from "./components/NotFound";
import Cart from "./components/carts/Cart";
import { Provider } from "./context";
import Modal from "./components/Modal";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <React.Fragment>
                    <Navbar />
                    <Switch>
                        <Route path="/details" component={Details} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/not-found" component={NotFound} />
                        <Route exact path="/" component={ProductList} />
                        <Redirect to="/not-found" />
                    </Switch>
                    <Modal />
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
