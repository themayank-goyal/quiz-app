import React from 'react'

const Results = ({userResponse, data}) => {
  let count = 0;
  userResponse.map((val, i) => {
    console.log(data[i]);
    if(val === data[i]?.ans) count++;
  })
  return (
    <div className='text-xl font-bold border-2 border-slate-800 text-white p-4 rounded-full bg-slate-800'>
      {count} / {userResponse.length - 1}
    </div>
  )
}

export default Results