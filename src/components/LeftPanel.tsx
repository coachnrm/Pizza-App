"use client"
import { saveUser } from '@/util/UserAction'
import React from 'react'

const LeftPanel = () => { 
    const [isLoginView, setIsLoginView] = React.useState(true)
    const signUpUser = async (formData: FormData) => {
        console.log('signUpUser', formData)
        const data = await saveUser(formData)
        if (data) {
            alert('User Added Successfully');
        }
    }
  return (
    <div className='flex p-4 justify-center flex-col align-middle'>
        <span className='text-center mb-4 font-extrabold'>Please toggle the button to see the view</span>
        <div className='flex gap-5 justify-center mb-6'>
            <button onClick={() => setIsLoginView(true)} className={`border-solid border-2 font-bold py-2 px-4 rounded ${isLoginView && 'bg-blue-400 text-white'}`}>
                Sign In
            </button>
            <button onClick={() => setIsLoginView(false)} className={`border-solid border-2 font-bold py-2 px-4 rounded ${!isLoginView && 'bg-blue-400'}`}>
                Sign Up
            </button>
        </div>
        {
            isLoginView ? <div className='flex flex-col'>
                <span className='text-center font-extrabold'>
                    Login Form
                </span>
                <form className='flex flex-col gap-4'>
                    <input type='email' className='border rounded-md p-2 focus-within:outline-green-400' placeholder='Email' />
                    <input type='password' className='border rounded-md p-2 focus-within:outline-green-400' placeholder='Password' />
                    <button className='bg-gradient-to-t from-red-400 to-green-400 text-white font-bold py-2 px-4 rounded'>
                    Sign In
                    </button>
                </form>
            </div> : (
            <div className='flex flex-col'>
                <span className='text-center font-extrabold'>
                    Fill your detail to add user
                </span>
                <form className='flex flex-col gap-4' action={(formData) => signUpUser(formData)}>
                    <input type='text' className='border rounded-md p-2 focus-within:outline-green-400' name='username' placeholder='Username' />
                    <input type='password' className='border rounded-md p-2 focus-within:outline-green-400' name='password' placeholder='Password' />
                    <input type='email' className='border rounded-md p-2 focus-within:outline-green-400' name='email' placeholder='Email' />
                    <input type='text' className='border rounded-md p-2 focus-within:outline-green-400' name='phoneNumber' placeholder='PhoneNo' />
                    <button className='bg-gradient-to-t from-red-400 to-green-400 text-white font-bold py-2 px-4 rounded'>
                    Sign Up
                    </button>
                </form>
            </div>)
        }
    </div>
  )
}

export default LeftPanel