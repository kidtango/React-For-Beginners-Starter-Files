import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. Take copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafod Market" />
        </div>
        <Inventory addFish={this.addFish} />
        <Order />
      </div>
    );
  }
}
