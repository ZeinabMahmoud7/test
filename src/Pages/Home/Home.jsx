import React from 'react'
import styles from '../Home/home.module.css'
import avatar from '../../assets/images/avataaars.svg'
const Home = () => {
  return (
    <>
      <div className={`${styles['bg-home']} py-8 text-white min-h-screen`}>
        <div className='container mx-auto w-full lg:max-w-screen-lg'>
          <div className='flex flex-col gap-y-4 justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
          <img src={avatar} alt="Avatar" className='object-contain h-45 w-60'/>
          </div>
          <div className='flex flex-col gap-y-6 justify-center items-center'>
            <h2 className='font-bold text-4xl uppercase text-center'>start Framework</h2>
            
            <div class="text-center relative inline-block">
            <span class="absolute left-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px] bg-white"></span>
            <i class="fa-solid fa-star text-lg relative z-10"></i>
            <span class="absolute right-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px] bg-white"></span>
             </div>
            <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
           
            
          </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Home
