'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Navbar from '../allcomponents/page'
import UserContext from '@/context/ContextData';

function page() {
    const [logemail, setLogemail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const userContext = useContext(UserContext)


    if (!userContext) {
        return null;
      }
    const { allUser } = userContext
    console.log( allUser )
    // const storedUsers: User[] = JSON.parse(localStorage.getItem('allUser') || '[]')
    // console.log('Stored Users:', storedUsers);  // Add a log to check the users stored in localStorage

    const router = useRouter();

    interface User {
        phoneoremail: string;
        password: string;
    }

    const handleClick = () => {
        router.push('/registration')
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', logemail, password);  // Add a log to see what email and password are entered

        const index = allUser.findIndex((user: User) => user.phoneoremail === logemail && user.password === password);
        if (index !== -1) {
            router.push('/allcomponents');
        } else {
            console.log("User not found");
            alert('Invalid email or password');
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center translate-y-[-20%] bg-[rgb(243,244,248)]'>
            <div className='translate-x-[-1000%] absolute'>
            <Navbar email={logemail} />
            </div>
            <div className='flex gap-[20%] w-full justify-center'>
                <div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[35px] text-blue-600 font-bold'>social-network</h1>
                        <p className='text-[28px]'>Recent logins</p>
                        <p className='text-gray-500'>Click your picture or add an account</p>
                    </div>
                    <div className='w-[75%] h-[60%] border-[1px] border-gray-400 rounded-[10px] mt-4'>
                        <div className='bg-[rgb(243,244,248)] w-[100%] h-[80%] rounded-t-[25px] flex justify-center items-center'>
                            <div className='bg-[rgb(21,120,240)] w-[20%] h-[20%] rounded-full flex justify-center items-center'>
                                <Image src='/add.png' alt='add' width={25} height={25} className='invert' />
                            </div>
                        </div>
                        <div className='bg-white w-[100%] h-[20%] rounded-b-[25px] flex justify-center items-center'>
                            <p className='text-[20px] text-blue-600'>Add Account</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-[0px_0px_5px_rgb(100,100,100)] translate-y-[8%] bg-white rounded-[5px] w-[20%] p-2 py-8 flex flex-col gap-5'>
                    <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            className='w-[90%] border-[1px] border-gray-500 rounded-[4px] pl-5 py-2'
                            placeholder='Email address or phone number'
                            onChange={(e) => setLogemail(e.target.value)}
                            value={logemail}
                        />
                        <input
                            type="password"
                            name="password"
                            className='w-[90%] border-[1px] border-gray-500 rounded-[4px] pl-5 py-2'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <button type='submit' className='w-[90%] bg-[rgb(8,101,254)] text-white py-2 rounded-[5px]'>
                            Log in
                        </button>
                    </form>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <p className='text-center text-blue-500'>Forgotten password?</p>
                        <hr className='bg-[rgb(209,205,205)] h-[100%]' />
                        <button className='bg-[rgb(62,181,30)] w-[45%] py-3 rounded-[5px] text-white' onClick={handleClick}>
                            Create new account
                        </button>
                    </div>
                    <p className='translate-y-[400%]'><span className='font-bold'>Create a Page </span>for a celebrity, brand or business</p>
                </div>
            </div>
        </div>
    );
}

export default page;
