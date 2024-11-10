import React from 'react'

const Footer = () => {
  return (
    <>
    <div  className='flex justify-between flex-wrap bg-zinc-600 '>
<div>
    <img className='ml-[6rem] mt-[1rem]' width={'30%'} src="https://cdn.uc.assets.prezly.com/34ad353e-e4fe-41a8-8ff7-93fe20e6b439/-/resize/992/-/format/png/-/progressive/yes/-/quality/smart/" alt="logo" />
</div>
    <div className='bg-zinc-600'>
    <h1 className='text-white font-extrabold py-2 ml-[8rem]'>InDrive is an online aggregator. We do not participate <br /> in cooperations between our users: they create and <br /> perform all requests in our app on their own</h1>
    <h1 className='text-white py-2 mb-5 ml-[8rem]'>© SUOL INNOVATIONS LTD, 2013-2024</h1>
    </div>
    </div>
    </>
  )
}

export default Footer