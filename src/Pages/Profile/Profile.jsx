import React, { useState } from 'react';
import poert1 from '../../assets/images/poert1.png';
import port2 from '../../assets/images/port2.png';
import port3 from '../../assets/images/port3.png';
import DispImage from '../../Component/DisImage/DispImage';

export const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image); 
  };

  const handleCancel = () => {
    setSelectedImage(null); 
  };

  return (
    <>
      <div className='container max-w-screen-sm py-7 md:mx-auto w-full  md:max-w-screen-lg'>
        <div className='flex flex-col gap-y-3 justify-between items-center'>
          <h2 className='font-bold text-4xl uppercase text-center' style={{ color: '#2C3E50' }}>
            portfolio component
          </h2>
          <div className='text-center relative inline-block'>
            <span className='absolute left-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px]' style={{ backgroundColor: '#2C3E50' }}></span>
            <i className='fa-solid fa-star text-lg relative z-10' style={{ color: '#2C3E50' }}></i>
            <span className='absolute right-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px]' style={{ backgroundColor: '#2C3E50' }}></span>
          </div>
          <div className='grid md:grid-cols-3 gap-3'>
            <div className='relative z-50'>
              <img src={poert1} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(poert1)}></i>
              </div>
            </div>
            <div className='relative z-50'>
              <img src={port2} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(port2)}></i>
              </div>
            </div>
            <div className='relative z-50'>
              <img src={port3} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(port3)}></i>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-3'>
            <div className='relative z-50'>
              <img src={poert1} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(poert1)}></i>
              </div>
            </div>
            <div className='relative z-50'>
              <img src={port2} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(port2)}></i>
              </div>
            </div>
            <div className='relative z-50'>
              <img src={port3} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(port3)}></i>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-3'>
            <div className='relative z-50'>
              <img src={poert1} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(poert1)}></i>
              </div>
            </div>
            <div className='relative z-50'>
              <img src={port2} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(port2)}></i>
              </div>
            </div>
            <div className='relative z-50'>
              <img src={port3} alt='' className='rounded-md' />
              <div
                style={{ backgroundColor: '#1ABC9C' }}
                className='flex justify-center items-center absolute inset-0 rounded-md bg-slate-400 opacity-0 hover:opacity-80 z-10 transition-opacity duration-300'
              >
                <i className='text-white fa-solid fa-plus fa-6x' onClick={() => handleClick(port3)}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && <DispImage image={selectedImage} handleCancel={handleCancel} />}
    </>
  );
};
