import React, { Component } from "react";

class ConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive, // !false -> true || !true -> false
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <div>
        {isActive ? <h1>Texto Activo</h1> : <h1>Texto inactivo</h1>}
        <button onClick={this.handleClick}>
          {isActive ? "Desactivar texto" : "Activar texto"}
        </button>
      </div>
    );
  }
}

export default ConditionalRendering;
