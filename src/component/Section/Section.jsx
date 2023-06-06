import React from 'react'
import printing1 from '../Images/prnting 1.png'
import printing2 from '../Images/prnting 2.jpg'
import printing3 from '../Images/printing 3.jpg'


const Section = () => {
  return (
    <div>
      
      <div className='flex max-w-auto items-center justify-center w-full gap-10  py-10 bg-[#acb1d63b] flex-col lg:flex-row md:justify-center md:flex-col-reverse'>
       
       <div >
        <img src={printing1} alt="" />
       </div>

       <div>
        <img src={printing2} alt="" />
        <h4 className='font-bold text-lg mt-3'>Printing Flyers</h4>
        <p className='max-w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, est.</p>
       </div>

       <div>
        <img src={printing3} alt="" />
       </div>

      </div>






    </div>
  )
}

export default Section
