import React, { Component } from "react";

export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto text-center pt-5">
                            <h1 className="display-3">404</h1>
                            <h1>ERROR</h1>
                            <h2>PAGE NOT FOUND</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
