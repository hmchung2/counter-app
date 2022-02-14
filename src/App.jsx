import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 11, value: 0 },
      { id: 22, value: 0 },
      { id: 33, value: 0 },
      { id: 44, value: 0 },
      { id: 55, value: 4 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
    //this.state = this.props.something; //in constructor you can set state directly
  }

  componentDidMount() {
    // Ajax call
    //this.setState({});

    console.log("App - Mounted");
  }

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);

    const counters = this.state.counters.filter((c) => c.id !== counterId);
    //this.setState({counters :  counters})
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrment}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
