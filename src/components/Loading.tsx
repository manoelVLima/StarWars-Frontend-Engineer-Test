import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <ReactLoading className="h-screen" type="spinningBubbles" color="black" height={500} />
    </div>
  )
}
