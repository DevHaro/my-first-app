import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Componente montado ComponentDidMount");
    // this.setState({
    //   counter: 1,
    // });
  }

  componentDidUpdate() {
    console.log("El componente se actualizó");
  }

  clickHandler() {
    let { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }

  clickHandlerSubs() {
    let {counter} = this.state
    this.setState({
      counter: counter - 1
    })
  }

  render() {
    console.log("Render", this.state.counter);
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={()=> this.clickHandler()}>Add</button>
        <button onClick={()=> this.clickHandlerSubs()}>Subs</button>
      </div>
    )
  }
}

export default Counter;