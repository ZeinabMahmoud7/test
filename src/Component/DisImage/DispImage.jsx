import React, { useEffect } from 'react';

const DispImage = ({ image, handleCancel }) => {
  const handleClick = (event) => {
   
    handleCancel(); 
  };


 

  return (
    <div onClick={handleClick} className='container isolate z-50 flex flex-col justify-center items-center fixed top-0 left-0 right-0  min-h-screen min-w-full'>
  <div className='absolute inset-0 opacity-60 z-0 bg-fixed' style={{ backgroundColor: '#C2DBFE' }}>
  </div>

  <div className='flex flex-col justify-center items-center z-10'>
    <div className='w-96 h-96'>
      <img src={image} alt='Displayed Image' className='z-50 isolate  rounded-md' />
    </div>
  </div>
</div>

  );
};

export default DispImage;
