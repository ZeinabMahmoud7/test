import React from 'react'
import styles from '../Home/home.module.css'
const Aboute = () => {
  return (
     <div className={`${styles['bg-home']}  text-white min-h-screen flex flex-col  justify-center items-center`}>
      <div className='container  mx-auto  w-full lg:max-w-screen-lg'>
       <div className='flex flex-col gap-y-6 justify-center items-center'>
            <h2 className='font-bold text-4xl uppercase text-center'>about component</h2>
            <div class="text-center relative inline-block">
            <span class="absolute left-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px] bg-white"></span>
            <i class="fa-solid fa-star text-lg relative z-10"></i>
            <span class="absolute right-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px] bg-white"></span>
             </div>
           <div className='grid md:grid-cols-2 g-4'>
            
             <p className='p-4'>
             Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
             </p>
             
             <p className='p-4'>
             Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
             </p>
           </div>
           
          </div>
    </div>
    </div>
  )
}

export default Aboute
