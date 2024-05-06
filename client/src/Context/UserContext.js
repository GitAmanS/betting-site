import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', userData);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await axios.get('http://localhost:3000/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/signup', userData);
      setUser(response.data.user);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
