import React from 'react'
import Cards from './Cards'
import MidCard from './MidCard'
import LastCard from './LastCard'

const Services = () => {
  return (
    <div className='px-6  py-4'> 
    <div className='flex justify-center'>
        <h2 className=' text-white text-3xl lg:text-6xl py-6 '>What We Offer!</h2>
    </div>
    <div className='py-4 flex justify-center gap-4 flex-wrap'>

      <div className='pt-5'>

    <Cards/>
      </div>

    <div className=' '>

    <MidCard/>
    </div>

    <div className='py-5'>

    <LastCard/>
    </div>
    </div>
    
     </div>
  )
}

export default Services