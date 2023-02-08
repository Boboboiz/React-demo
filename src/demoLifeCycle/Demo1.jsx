import React, { PureComponent } from "react";

class Demo1 extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  static getDerivedStateFromProps(nextProps, currentState) {
    return { count: nextProps.item };
  } // nextProps của component cha,

  //   shouldComponentUpdate(nextProps, nextState) {
  //     // console.log("shouldComponentUpdate", nextState, this.state);
  //     if(this.props.item !== nextProps.item || this.state.count !== nextState.count){
  //         return true
  //     }
  //     return false;
  //   }
  render() {
    return (
      <div className="bg-primary">
        <h1>Demo Lifecycle</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Count</button>
      </div>
    );
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    // clear setInterval
    // clear store
  }
}
export default Demo1;
// mounting lifecycle: constructor => render => componentDidMount
// updating lifecycle :shouldComponentUpdate => render => getSnapshotBeforeUpdate => componentDidUpdate
// unmounting lifecycle: componentWillUnmount

// setInterval: set tgian chạy func vĩnh viễn như setTimeOut
