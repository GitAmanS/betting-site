import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext'; // Import the UserContext

function LoginSignup() {
  const navigate = useNavigate();
  const { login, signup } = useUser(); // Access login and signup functions from UserContext
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // Get email and password from the login form fields
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      // Call the login function from the context
      await login({ email, password });
      // Redirect to dashboard upon successful login
      navigate('/Dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., display error message
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    // Get name, email, and password from the signup form fields
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      // Call the signup function from the context
      await signup({ name, email, password });
      // Redirect to dashboard upon successful signup
      navigate('/Dashboard');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup error, e.g., display error message
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white mx-2 rounded-lg p-8 shadow-md w-full max-w-md">
        {isLogin ? (
          <>
            {/* Login form */}
            <h1 className="font-semibold text-black mb-8 text-start mr-auto">
              <span className="bg-clip-text text-2xl text-transparent bg-gradient-to-r from-purple-500 to-black">Hello! let's get started</span>
              <br />
              <span className="bg-clip-text text-xl text-transparent bg-gradient-to-r from-purple-500 to-black">Sign in to continue</span>
            </h1>
            <h2 className="text-xl mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account?{' '}
              <span
                className="text-purple-600 cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                Sign Up
              </span>
            </p>
          </>
        ) : (
          <>
            {/* Signup form */}
            <h2 className="text-xl mb-4">Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{' '}
              <span
                className="text-purple-600 cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
