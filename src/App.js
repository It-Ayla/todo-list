import React, { Component } from "react";
import Page from "./components/page"
import "./app.css"

class App extends Component {
    render() {
        return (
            <div className="container">
                <Page />
            </div>
        );
    }
}

export default App;
