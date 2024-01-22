import React from 'react'
import { facilityDataMain, facilitySubData } from '../data/data'

const Facility = () => {
  return (
       <>
    <section id='facility' className='wrapper-height'>
    <div className="px-8 pt-16">
        <div className="row">
            <div className="col text-center">
                <h2 className='text-4xl font-bold text-gray-700'>Latest Classes</h2>
                <h6 className='py-1 text-sm'>Sub Heading To Explain More</h6>
            </div>
            <div className="col flex gap-2 flex-wrap justify-center py-2">
        <button className='border-2 font-semibold border-transparent hover:border-green-700 py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 hover:text-green-700 hover:font-semibold broder hover:border-custom-green'>Beginners Yoga</button>
        <button className='border-2 font-semibold border-transparent hover:border-green-700 py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 hover:text-green-700 hover:font-semibold broder hover:border-custom-green'>Stretching</button>
        <button className='border-2 font-semibold border-transparent hover:border-green-700 py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 hover:text-green-700 hover:font-semibold broder hover:border-custom-green'>Fly-Yoga</button>
        <button className='border-2 font-semibold border-transparent hover:border-green-700 py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 hover:text-green-700 hover:font-semibold broder hover:border-custom-green'>Yin Yoga</button>
        <button className='border-2 font-semibold border-transparent hover:border-green-700 py-2 px-4 rounded-md text-gray-700 dark:text-slate-300 hover:text-green-700 hover:font-semibold broder hover:border-custom-green'>Flo Yoga</button>
        </div>
        </div>
    <div className="row pt-5">
        {facilityDataMain && facilityDataMain.map((item, i) => (
                   <div key={i} className='grid gap-2 grid-cols-2 max-h-52'>
                    <img src={item.Image} height={"500px"} alt="yoga image" />
                    <div className="grid-items text-justify">
                        <h4 className='text-2xl font-semibold'>{item.title}</h4>
                        <p className='leading-6 py-3 text-green-700'>{item.des}</p>
                        <div className='grid lg:gap-11 lg:grid-cols-2'>
                        {facilitySubData && facilitySubData.map((item, i) => (
                                <div className="grid-items pt-5">
                                    <img src={item.icon} alt="number icon" />
                                    <p className='text-lg pt-2 font-semibold'>{item.subTitle}</p>
                                    <p className='leading-6 text-sm py-3 text-green-700'>{item.subDes}</p>
                                </div>
                        ))}
                        </div>
                    </div>
                   </div>
        ))}
    </div>
    </div>
    
    </section>
    </>
  )
}

export default Facility
