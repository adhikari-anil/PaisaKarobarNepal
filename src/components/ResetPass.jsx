import React from 'react'

function ResetPass() {
  return (
    <>
    <div>ResetPass</div>
    <label>New Pass</label>
    <input type="text" placeholder='new pass'/>
    <label>Confirm Pass</label>
    <input type="text" placeholder='confirm pass'/>
    <button>Reset</button>
    </>
  )
}

export default ResetPass