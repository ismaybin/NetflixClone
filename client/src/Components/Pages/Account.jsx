import React from 'react'
import SaveShows from '../SaveShows'

const Account = () => {
  return (
    <>
      <div className=' w-full text-white'>

      <img className='w-full h-[400px] object-cover'
             src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/1e655120-56b8-48d2-be9e-56d08cdacf0f/BD-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className=' bg-black-/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className=' absolute top-[20%] p-4 md:p-8'>
          <h1 className=' text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
      <SaveShows />
    </>
  )
}

export default Account
