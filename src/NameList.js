import React from 'react'

function NameList() {
    const names=['saurav','saugat','aman']
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {
            names.map(stdname=><h2>{stdname}</h2>)
        }

    </div>
  )
}

export default NameList