import React from 'react'
import pabau from "../assets/images/pabau_logo.webp"
function Footer() {
  return (
    <div className='flex justify-center items-center p-2'>
      <p className='mr-2 font-medium text-lg'>Powered By</p>
      <img src={pabau} alt="logo" className='h-5' />
    </div>
  )
}

export default Footer
