'use client'
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import UserContext, { UserContextType, User } from '@/context/ContextData';

function Page() {
  const [user, setUser] = useState<User>({
    name: "",
    lastname: "",
    phoneoremail: "",
    password: "",
    gender: "",
    numberdate: "",
    months: "",
    year: ""
  });

  const userContext = useContext(UserContext);

  if (!userContext) {
    return null;
  }

  const { allUser, setAllUser }: UserContextType = userContext;
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    const isValid = Object.values(user).every(value => value !== "");
    if (!isValid) {
      alert("Please fill out all fields");
      return;
    }

    setAllUser(prevUsers => {
      const updatedUsers = [...prevUsers, user];
      localStorage.setItem('allUser', JSON.stringify(updatedUsers));
      return updatedUsers;
    });

    afterRegister();
  };

  const afterRegister = () => {
    router.push('/login2');
  };

  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = Array.from({ length: 120 }, (_, i) => 2024 - i);

  return (
    <div className='flex justify-center items-center w-full h-screen bg-[rgb(243,244,248)]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[45px] font-bold text-blue-500 mb-4'>Social Network</h1>
        <div className='w-[65%] bg-white rounded-[5px] shadow-[0px_0px_5px_rgb(120,120,120)]'>
          <div className='p-5'>
            <p className='text-2xl font-semibold mb-2 text-center'>Create a new account</p>
            <p className='text-sm mb-4 text-center'>It's quick and easy.</p>
          </div>
          <hr className='w-full h-2' />
          <div className='w-full px-5 flex flex-col gap-5 justify-center mt-4'>
            <div className='flex gap-5'>
              <input type="text" name="name" placeholder='First name' className='border-[1px] border-gray-400 rounded-[5px] py-2 w-[50%] pl-5' onChange={handleChange} required />
              <input type="text" name="lastname" placeholder='Surname' className='border-[1px] border-gray-400 rounded-[5px] py-2 w-[50%] pl-5' onChange={handleChange} required />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[15px] text-gray-500'>Date of birth</p>
              <div className='flex gap-5'>
                <select name="numberdate" className='w-[33%] py-2 rounded-[5px]' onChange={handleChange} required>
                  {numbers.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
                <select name="months" className='w-[33%] py-2 rounded-[5px]' onChange={handleChange}>
                  {months.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
                <select name="year" className='w-[33%] py-2 rounded-[5px]' onChange={handleChange}>
                  {years.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[15px] text-gray-500'>Gender</p>
              <div className='flex gap-5'>
                <div className='border-[1px] border-gray-400 w-[33%] py-1 rounded-[5px] flex justify-around'>
                  <p>Female</p>
                  <input type="radio" name="gender" value='female' onChange={handleChange} />
                </div>
                <div className='border-[1px] border-gray-400 w-[33%] py-1 rounded-[5px] flex justify-around'>
                  <p>Male</p>
                  <input type="radio" name="gender" value='male' onChange={handleChange} />
                </div>
                <div className='border-[1px] border-gray-400 w-[33%] py-1 rounded-[5px] flex justify-around'>
                  <p>Custom</p>
                  <input type="radio" name="gender" value='custom' onChange={handleChange} />
                </div>
              </div>
            </div>
            <input type="text" name="phoneoremail" placeholder="Mobile number or email address" className='border-[1px] border-gray-400 rounded-[5px] px-4 py-2 mt-2' onChange={handleChange} required />
            <input type="password" name="password" placeholder='Password' className='border-[1px] mt-2 border-gray-400 rounded-[5px] px-4 py-2' onChange={handleChange} required />
          </div>
          <p className='text-[11px] text-gray-500 pl-5 max-w-[80%] mt-8 mb-4'>By clicking Sign Up, you agree to our Facebook <span className='text-blue-600 hover:underline hover:cursor-pointer'>Learn more</span></p>
          <p className='text-[11px] text-gray-500 pl-5 mt-2 max-w-[85%]'>By clicking Sign Up, you agree to our <span className='text-blue-600 hover:underline hover:cursor-pointer'>Terms, Privacy Policy</span> and <span className='text-blue-600 hover:underline hover:cursor-pointer'>Cookies Policy.</span> You may receive SMS notifications from us and can opt out at any time.</p>
          <button className='bg-[rgb(62,181,30)] w-[35%] py-[1.5%] rounded-[5px] translate-x-[90%] text-white mt-8' onClick={handleSubmit}>Sign in</button>
          <p className='text-[18px] text-blue-600 text-center mt-4 mb-4 hover:cursor-pointer' onClick={afterRegister}>Already have an account?</p>
        </div>
      </div>
    </div>
  )
}

export default Page;
