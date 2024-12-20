
import React, { useState } from 'react'

const Contact = () => {
    const [inputValue,setInputValue]=useState("");
    const [ageValue,setAge]=useState("");
    const [emailValue,setEmail]=useState("");
    const [passValue,setPass]=useState("");
    const showSibling=(e)=>{
        if(e.target.value!=''){
            e.target.previousSibling.classList.remove("hidden");
        }
        else{
            e.target.previousSibling.classList.add("hidden");
        }
    }
   const handleInput=(e)=>{
    setInputValue(e.target.value);
    showSibling(e);
   }
   const handleAge=(e)=>{
    setAge(e.target.value);
    showSibling(e);
   }
   const handleEmail=(e)=>{
    setEmail(e.target.value);
    showSibling(e);
   }
   const handlePass=(e)=>{
    setPass(e.target.value);
    showSibling(e);
   }
  return (
    <>
       <div className='container py-7 mx-auto w-full flex flex-col justify-center items-center   min-h-screen '>
        <div className='flex flex-col gap-y-3 mb-10 justify-between items-center'>
          <h2 className='font-bold text-4xl uppercase text-center' style={{ color: '#2C3E50' }}>
          conatct section
          </h2>
          <div className='text-center relative inline-block'>
            <span className='absolute left-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px]' style={{ backgroundColor: '#2C3E50' }}></span>
            <i className='fa-solid fa-star text-lg relative z-10' style={{ color: '#2C3E50' }}></i>
            <span className='absolute right-10 top-1/2 transform -translate-y-1/2 w-24 h-[5px]' style={{ backgroundColor: '#2C3E50' }}></span>
          </div>
          </div>
          <form action="" className=' flex flex-col justify-center w-full items-center mx-auto'>
            <label htmlFor="userName" className='hidden  w-1/2' style={{color:'#1ABC9C'}}>userName : </label>
            <input id='userName' type='text' value={inputValue}
            onInput={handleInput}   className='p-2 w-1/2 mt-2 rounded-md outline-none border-b-[1px] ' placeholder='userName' name='userName'/>
            <label htmlFor="userAge" className='hidden mt-7 text-left  w-1/2' style={{color:'#1ABC9C'}}>userAge : </label>
            <input value={ageValue}
            onInput={handleAge} id='userAge' type='text' className='w-1/2 p-2 mt-2 rounded-md outline-none border-b-[1px] ' placeholder='userAge' name='userAge'/>
            <label htmlFor="userEmail" className='hidden mt-7 text-left  w-1/2' style={{color:'#1ABC9C'}}>userEmail : </label>
            <input value={emailValue}
            onInput={handleEmail} id='userEmail' type='email' className='w-1/2 mt-2 p-2 rounded-md outline-none border-b-[1px] ' placeholder='userEmail' name='userEmail'/>
            <label htmlFor="pass" className='hidden mt-7 text-left w-1/2' style={{color:'#1ABC9C'}}>userPassword : </label>
            <input value={passValue}
            onInput={handlePass} id='pass' type='password' className='w-1/2 mt-2 p-2 rounded-md outline-none border-b-[1px] ' placeholder='userPassword' name='userPassword'/>
            <button type='button' className='p-3 text-white  rounded-lg mt-7 text-left' style={{backgroundColor:'#1ABC9C'}}>send Message</button>
          </form>
          </div>
    </>
  )
}

export default Contact
