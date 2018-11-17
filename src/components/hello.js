import React from 'react'

export default class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            toggle:false,
        }
    }
    render() {
      return <h1 onClick={() => {this.setState({toggle:!this.state.toggle})}}>Hello, {this.props.name}{this.state.toggle ? "YES":"NO"}</h1>;
    }
  }