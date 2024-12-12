'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function page() {

    const [logemail, setLogemail] = useState('');
    const [password, setPassword] = useState('');

    const storedUsers: User[] = JSON.parse(localStorage.getItem('allUser') || '[]')
    console.log(storedUsers);

    interface User {
        phoneoremail: string;
        password: string;
      }

    const router = useRouter();
  
  
      const handleClick = () => {
          router.push('/')
      };

      let indexOfAcc = 0
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
          const index = storedUsers.findIndex((user: User) => user.phoneoremail === logemail);
            if (index !== -1) {
            indexOfAcc = index
            router.push('/');
            } else {
            console.log("User not found");
            }
      }

  return (
    <div className='flex flex-col justify-center items-center w-full pb-[20%] bg-[rgb(243,244,248)]'>
        <div>
            <h1 className='text-[45px] font-bold text-blue-500 mb-4 mt-20'>social network</h1>
            <div className='flex flex-col gap-2 w-[110%] bg-white p-5 pb-12 translate-x-[-15%] rounded-[5px] shadow-[0px_0px_10px_rgb(120,120,120)]'>
                <p className='text-center text-login text-[18px]'>Log in to Social-network</p>
                {/* form */}
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-3'>
                        <input type="text" name="logemail" value={logemail} onChange={(e) => setLogemail(e.target.value)} pattern="(\+?\d{1,3}[-\s]?)?(\(?\d{1,4}\)?[-\s]?)?[\d\s\-]{7,15}|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})" placeholder="Mobile number or email address" className='border-[1px] border-gray-400 rounded-[5px] px-4 py-2 mt-2' required />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='border-[1px] border-gray-400 rounded-[5px] px-4 py-2 mt-2' required />
                        <button type='submit' className='bg-[rgb(24,120,243)] py-3 rounded-[5px] text-white font-bold'>Log in</button>
                    </div>
                    <div className='flex gap-4 justify-center mt-5'>
                        <p className='text-blue-600 hover:cursor-pointer hover:underline'>Forgoten account?</p>
                        <p className='text-blue-600 hover:cursor-pointer hover:underline' onClick={handleClick}>Sign up for Social network</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default page