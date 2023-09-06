import React from 'react'

function Page({option}) {
  return (
    <div className='grow text-center font-medium p-5'>
      <h1 className='p-5 bg-white w-full lg:w-1/3 text-center mx-auto my-5'>{option}</h1>
    </div>
  )
}

export default Page
