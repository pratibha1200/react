import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: []
  //   // imageUrl: "https://picsum.photos/200"
  // };

  componentDidUpdate(PrevProps, PrevState) {
    console.log("previous state", PrevState);
    console.log("previous props", PrevProps);
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };

  // doHandleIncrement = (dhdbbd) => {
  //   this.handleIncrement({ id: 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({
  //     value: this.state.value - 1
  //   });
  // };

  // renderTags() {
  //   // if (this.state.tags.length === 0) return <p> there is no tags</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    // console.log("props", this.props);
    // let classes = this.getBadgeClasses();
    console.log("Counter - rendered");

    return (
      <div>
        {/* <img src={this.state.imageUrl}></img> */}
        {/* {this.props.children} */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {/* <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button> */}

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>

        <button
          className="btn btn-sm btn-success m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>

        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
        {/* {this.state.tags.length === 0 && "this is good"} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
