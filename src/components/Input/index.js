import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, value, name } = this.props
    return <input />;
  }
}

export default Input;
