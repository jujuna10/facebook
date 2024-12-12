'use client'
import { createContext, useState, ReactNode, useEffect } from 'react';

export interface User {
  name: string;
  lastname: string;
  phoneoremail: string;
  password: string;
  gender: string;
  numberdate: string;
  months: string;
  year: string;
}

export interface UserContextType {
  allUser: User[];
  setAllUser: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserContext = createContext<UserContextType | null>(null);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [allUser, setAllUser] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('allUser');
    if (storedUsers) {
      setAllUser(JSON.parse(storedUsers));
      console.log(storedUsers, 'context');
      
    }
  }, []);

  console.log(allUser, 'allUser context');

  useEffect(() => {
    localStorage.setItem('allUser', JSON.stringify(allUser));
  }, [allUser]);


  return (
    <UserContext.Provider value={{ allUser, setAllUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
