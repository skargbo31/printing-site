import React from 'react'
import ul from '../Images/365.png'


const homePage = () => {
  return (
    <div>

      {/* section1 */}

    <section className='flex flex-col lg:flex-row items-center md:justify-center md:flex-col-reverse gap-32'>
        <div className=''>
            <h1 className='uppercase font-bold lg:text-[38px] md:text-4xl mb-5'>We provide a lots of</h1>
            <span className='capitalize font-bold lg:text-2xl md:text-xl pt-3 text-gray-600 '>printing & copying</span>
            <p className='max-w-sm text-gray-500 pt-5 pb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime error quia libero fugit quo. Minus ex voluptate labore praesentium?</p>
            <button className='py-2 px-6 block bg-blue-600 rounded-lg text-white'>Service</button>
        </div>
            <div>
                <img src={ul} alt="" />
            </div>

            <div>
            </div>
    </section>


    </div>
  )
}

export default homePage
