/*import React, { Component } from 'react'

export class Classcomponent extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }

    }
    handleIncre=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncre}>Increment</button>
      </div>
    )
  }
}

export default Classcomponent
*/
import React, { Component } from 'react'

export class Classcomponent extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }

    }
    handleDecre=()=>{
        this.setState({count:this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleDecre}>Decrement</button>
      </div>
    )
  }
}

export default Classcomponent

