import React from 'react'


const page = () => {
  return (
    <>
  <div className='flex justify-center flex-wrap mt-5 '>
    <img src="https://couriers.indrive.com/assets/hero/hero.jpg" alt="image" />
  </div>
  <div className='flex justify-center flex-wrap mt-5 text-4xl font-extrabold text-black'>
    <h1>Customers all over the world <br /> <span className='ml-[2em]'> use inDrive.Couriers</span> </h1>
  </div>
  <div className="flex items-center justify-center ">
  <div className="flex items-center justify-center flex-wrap mt-5 bg-zinc-600 w-[45rem] p-5 mb-[10rem] rounded-3xl ">
    <ul className="flex justify-center gap-[8rem] mt-[1rem] flex-wrap text-5xl text-white">
      <li>260+ <br /> <span className="text-xl ml-[1em]">Cities</span></li>
      <li>38 <br /> <span className="text-xl ml-[-1rem]">Countries</span></li>
      <li>175 <br /> <span className="text-xl ml-[-2rem]">Min app installs</span></li>
    </ul>
  </div>
</div>


    </>
  )
}

export default page