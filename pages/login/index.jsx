import React from 'react';
import Link from 'next/link';


export default function Page() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Handle response if necessary
    // const data = await response.json()
    // ...
  }

  return (
    <div className="bg-black w-screen min-h-screen flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-96 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email / Username
          </label>
          <input
            className="bg-transparent border-b-2 border-indigo-500 rounded 
            w-full py-2 px-3 text-gray-400  leading-tight focus:outline-none focus:shadow-outline
            hover:border-indigo-200 focus:border-t-2 transition transition-border duration-700  ease-in-out"
            id="email"
            type="email"
            placeholder="Enter your email or username"
            name="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-transparent border-b-2 border-indigo-500 rounded 
            w-full py-2 px-3 text-gray-400  leading-tight focus:outline-none focus:shadow-outline
            hover:border-indigo-200 focus:border-t-2 transition duration-300 ease-in-out"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>
        <div className="mb-6">
          <p className='text-gray-400 text-center'>Don't have an account?{' '}
            <Link href="/register" className="text-indigo-500 hover:text-indigo-300 transition duration-300 ease-in-out">
                Register
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-transparent border-b-2 border-indigo-500 rounded 
            w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline
          hover:border-indigo-200 transition duration-300 ease-in-out"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}