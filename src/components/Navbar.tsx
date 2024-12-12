'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import UserContext, { User } from '@/context/ContextData';

interface NavbarProps {
  email?: string;
}

function Navbar({ email = '' }: NavbarProps) {

  const images = ['/home.png', '/video.png', '/group.png', '/play.png',]
  const images2 = ['/dots-menu.png', '/messenger.png', '/bell.png','/user.png']

  const userContext = useContext(UserContext);
  
  // console.log(logemail, 'email')

  if (!userContext) {
    return null;
  }

  // const { allUser, setAllUser }: UserContextType = userContext;

  const storedUsers: User[] = JSON.parse(localStorage.getItem('allUser') || '[]')
  console.log(storedUsers);

  // let indexOfAcc = 0
  //     const handleSubmit = (e: React.FormEvent) => {
  //         const index = storedUsers.findIndex((user: User) => user.phoneoremail === email);
  //           if (index !== -1) {
  //           indexOfAcc = index
  //           return
  //       }
  // console.log(indexOfAcc)

  return (
    <div className='flex justify-between gap-2 mt-4'>
      <div className='flex gap-4'>
        <Image src='/facebook.png' width={50}  height={50} alt='logo' />
        <input type="text" name='friend' placeholder='Search on Facebook' className='bg-[rgb(241,242,246)] rounded-[50px] pl-5' />
      </div>
      <div className='flex gap-4 justify-center items-center'>
        {images.map((item,index) => (
          <Image key={index} src={`${images[index]}`} width={100000000} height={1000000000} alt='photos' className='w-[50px] h-[50px]' />
        ))}
      </div>
      <div className='flex gap-4 justify-center items-center '>
        {images2.map((item,index) => (
          <div key={index} className='bg-[rgb(226,229,234)] w-[39px] h-[39px] rounded-[50%] flex justify-center items-center'>
            <Image key={index} src={`${images2[index]}`} width={100000000} height={1000000000} alt='photos' className='w-[20px] h-[20px]' />
          </div>
        ))}
      </div>
    </div>
      )
}

export default Navbar