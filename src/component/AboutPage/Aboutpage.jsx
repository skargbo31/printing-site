import React from 'react'
import ben from '../Images/ben1.png'

const Aboutpage = () => {
  return (
    <div>

        {/* Section2 */}
    <section>
      <div className='text-center '>
        <h3 className='lg:text-5xl md:text-sm font-extrabold pt-14'>Meet our experts</h3>
        <p className='max-w-lg text-center mx-auto text-gray-500 pt-2 md:text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, minus.</p>
      </div>

      <div className='flex items-center justify-center w-full gap-36 flex-wrap py-10 max-w-full'>
       
       <div>
        <img src={ben} alt="" className='' />
        <div className='text-center mx-auto gap-10'>
        <h3 className='font-bold lg:text-2xl md:tex text-gray-500 shadow-sm hover:text-[#a1a1a1a1]'>Bai Kargbo</h3>
        <span className='text-blue-500'>Owner</span>
        </div>
       </div>

       <div>
        <img src={ben} alt="" />
        <div className='text-center mx-auto gap-10'>
        <h3 className='font-bold lg:text-2xl md:text-sm text-gray-500 shadow hover:text-[#a1a1a1a1]'>Bai Kargbo</h3>
        <span className='text-blue-500'>Owner</span>
        </div>
       </div>

       <div>
        <img src={ben} alt="" />
        <div className='text-center mx-auto gap-10'>
        <h3 className='font-bold lg:text-2xl md:text-sm text-gray-500 shadow hover:text-[#a1a1a1a1] '>Bai Kargbo</h3>
        <span className='text-blue-500'>Owner</span>
        </div>
       </div>
        



      </div>


    </section>


    </div>
  )
}

export default Aboutpage
