  import React from 'react'
  
  export default function Form() {
 return (
    <form>
        <div>
            <label htmlFor="name">Name: </label>
            <div>
                <input type="text" id="name" value="" />
            </div>
        </div>
        <div>
            <label htmlFor="task">Task: </label>
            <div>
                <input type="text" id="task" value="" />
            </div>
        </div>
    </form>     
    )
  }
  