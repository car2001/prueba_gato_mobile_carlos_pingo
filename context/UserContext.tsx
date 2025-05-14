import { User } from '@/models/user';
import { getItem, setItem } from '@/utils/storage';
import React, { createContext, useContext, useState } from 'react';
import initialUsers from "../assets/data/user.json";

type UserContextType = {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
  toggleStatus: (id: string) => void;
  getUserById: (id: string) => User | undefined;
};

const UserContext = createContext<UserContextType>(null!);

export const UserProvider = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const data = await getItem('users');
    if (data) {
      setUsers(JSON.parse(data));
    } else {
      setUsers(initialUsers as User[]);
      await setItem('users', JSON.stringify(initialUsers));
    }
  };

  const persist = (users: User[]) => {
    setUsers(users);
    setItem('users', JSON.stringify(users));
  };

  const addUser = (user: Omit<User, 'id'>) => {
    const newUser = { ...user, id: Date.now().toString() };
    persist([...users, newUser]);
  };

  const updateUser = (updated: User) => {
    const updatedList = users.map(u => (u.id === updated.id ? updated : u));
    persist(updatedList);
  };

  const deleteUser = (id: string) => {
    persist(users.filter(u => u.id !== id));
  };

  const toggleStatus = (id: string) => {
    persist(users.map(u => u.id === id ? { ...u, active: !u.active } : u));
  };

  const getUserById = (id: string) => users.find(u => u.id === id);


  return (
    <UserContext.Provider
      value={{ users, fetchUsers, addUser, updateUser, deleteUser, toggleStatus, getUserById }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
