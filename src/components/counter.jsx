import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // count: 0,
    // imageUrl: "https://picsum.photos/200",
    // tags: [], //"tag1", "tag2", "tag3"
  };

  state2 = {
    count: 0,
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  textStyle = {
    color: "red",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={"key_" + tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props);
    //console.log("props", this.props);
    return (
      // <React.Fragment>
      //   </React.Fragment>
      <div>
        {/* {this.props.children}
        <h4>{this.props.id}</h4> */}
        {/* <img src={this.state.imageUrl} alt=""></img>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please Create a new tags !"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    //return count === 0 ? <h1>Zero</h1> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
