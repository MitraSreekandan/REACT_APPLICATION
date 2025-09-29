/* function component
import React from 'react'

const Greetings = () => {
  return (
    <div>
        <h1>hello world</h1>
    </div>
  )
}

export default Greetings

*/


//class component
/*
import React, { Component } from 'react'

export class Greetings extends Component {
  render() {
    return (
      <div>
        Greetings
      </div>
    )
  }
}

export default Greetings
*/
/*

import React, { Component } from 'react'

export class Greetings extends Component {
    constructor(data){
        super(data);
        this.data={
            count:0
        }
    }
  render() {
    return (
      <div>
        <h1>{this.data.count}</h1>
      </div>
    )
  }
}

export default Greetings
*/

const[state,setState]=useState(0)