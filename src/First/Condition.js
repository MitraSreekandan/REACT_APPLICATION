/*import React from 'react'

const Condition = () => {
    const age=19;
  return (
    <div>
      <h1>{age>18?"eligible":"not eligible"}</h1>
    </div>
  )
}

export default Condition
*/
import React from 'react'

const Condition = () => {
    const check=true;
  return (
    <div>
      <h1>
        {check && <p>this is a true Condition</p>}
      </h1>
    </div>
  )
}

export default Condition
