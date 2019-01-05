import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        products: [],
        details: detailProduct,
        cart: [],
        modalProduct: detailProduct,
        modalOpen: false,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState({ products });
    };

    componentDidMount() {
        this.setProducts();
    }

    getItem = id => {
        const product = this.state.products.find(product => product.id === id);
        return product;
    };

    handleDetail = id => {
        const details = this.getItem(id);
        this.setState({ details });
    };

    handleCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            {
                products: tempProducts,
                cart: [...this.state.cart, product]
            },
            () => {
                this.addTotal();
            }
        );
    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState({
            modalProduct: product,
            modalOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            modalOpen: false
        });
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(
            {
                cart: [...tempCart]
            },
            () => {
                this.addTotal();
            }
        );
    };

    removeItem = id => {
        let tempProdcuts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProdcuts.indexOf(this.getItem(id));
        const removeProduct = tempProdcuts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(
            {
                cart: [...tempCart],
                products: [...tempProdcuts]
            },
            () => {
                this.addTotal();
            }
        );
    };

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(
                {
                    cart: [...tempCart]
                },
                () => {
                    this.addTotal();
                }
            );
        }
    };

    clearCart = () => {
        this.setState(
            {
                cart: []
            },
            () => {
                this.setProducts();
                this.addTotal();
            }
        );
    };

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        let tempTax = subTotal * 0.1;
        let tax = parseFloat(tempTax.toFixed(2));
        let total = subTotal + tax;
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        });
    };

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    handleCart: this.handleCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    clearCart: this.clearCart,
                    removeItem: this.removeItem
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
