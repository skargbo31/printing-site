import React from 'react'
import pp from '../Images/pp.png'

const Cards = () => {
  return (
    <div>
      
        <section className='flex py-11 flex-col lg:flex-row mt-24 py-auto justify-center items-center md:justify-center md:flex-col-reverse pt-5 lg:gap-24 md:gap-10'>
            <div className='max-w-lg cursor-pointer'>
                <img src={pp} alt="" />
            </div>

            <div>
                <h1 className='text-slate-400 font-bold lg:text-4xl md:text-lg mb-2'>Our Skills in Printing</h1>
                <span className='font-bold text-2xl'>& Design Service</span>
                <p className='max-w-md mt-2 text-2xl  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iure?</p>
                <button className='p-2 px-6 block bg-blue-600 rounded-lg text-white mt-3 text-xl'>Contact Us</button>
            </div>
        </section>



    </div>
  )
}

export default Cards
