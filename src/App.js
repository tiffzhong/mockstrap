import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Services />
      </div>
    );
  }
}

export default App;
