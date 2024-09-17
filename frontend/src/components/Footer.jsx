import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-900 w-full h-48 bottom-0' id='contact flex'>
      <p className='sm:mx-20 mx-5 pt-4 text-white'>Created by @Subhajit Mondal</p>
      
      <div className='flex items-center sm:mx-20 mx-5 pt-2'><img src="/gmail.svg" alt="" className='h-8'/><p className='text-white mx-4'>subhajit09111999@gmail.com</p></div>
      <a href="https://github.com/Subhajit685" target="_blank"><div className='flex items-center sm:mx-20 mx-5 pt-2'><img src="/github.svg" alt="" className='h-8 in'/><p className='text-white mx-4 hover:text-blue-500 hover:underline'>Github</p></div></a>
      <a href="https://www.linkedin.com/in/subhajit-mondal-888129242/" target="_blank"><div className='flex items-center sm:mx-20 mx-5 pt-2'><img src="/linkdin.svg" alt="" className='h-8'/><p className='text-white mx-4 hover:text-blue-500 hover:underline'>Linkdin</p></div></a>
      
    </div>
  )
}

export default Footer
