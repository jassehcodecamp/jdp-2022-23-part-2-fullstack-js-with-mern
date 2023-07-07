import React from 'react'

const ResultItem = ({label, value}) => {
  return (
    <div className="flex md:space-x-3 space-x-2">
      <div>
        {value ? <span>{value}</span> : <span>&ndash; &ndash;</span>}
      </div>
      <div className="text-[#141414]">{ label }</div>
    </div>
  )
}

export default ResultItem