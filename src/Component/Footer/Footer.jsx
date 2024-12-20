import React from 'react'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <>
      <div className={`${styles['bg-footer']} py-8 text-white `}>
    <div className='container py-7 mx-auto w-full lg:max-w-screen-lg'>
        <div className='grid md:grid-cols-3 gap-5'>
         <div className='flex flex-col justify-center items-center gap-y-3'>
            <h2 className='font-semibold text-3xl uppercase text-center'>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
         </div>
         <div className='flex flex-col justify-center items-center gap-y-3'>
            <h2 className='font-semibold text-3xl uppercase text-center'>AROUND THE WEB</h2>
            <div className='flex flex-row justify-center items-center gap-x-3'>
            <i class="fa-brands fa-facebook border p-3 rounded-full"></i>
            <i class="fa-brands fa-twitter  border p-3 rounded-full"></i>
            <i class="fa-brands fa-linkedin-in  border p-3 rounded-full"></i>
            <i _ngcontent-vhv-c21="" class="fa-solid fa-globe mx-1 icon border p-3 rounded-full"></i>
            </div>
            
         </div>
         <div className='flex flex-col justify-center items-center gap-y-3'>
         <h2 className='font-semibold text-3xl uppercase text-center'>ABOUT FREELANCER</h2>
            <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
         </div>
        </div>
     </div>
     
      </div>
      <div className={`${styles['bg-end']} py-8 text-white `}>
        <p className='text-center'>Copyright © Your Website 2021</p>
     </div>
    </>
  )
}

export default Footer
