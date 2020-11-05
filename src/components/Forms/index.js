import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      MXNCauantity: "",
    }; 

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    let {MXNQauantity} = this.state
    
    this.setState({
      input1: event.target.value,
    });
  }

  render() {
    const { MXNCauantity } = this.state;
    return (
      <div>
        <form>         
          <input type="number" value={MXNCauantity} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Forms;