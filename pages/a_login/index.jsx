import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export default function Page() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  if (!isReady) {
    return null;  // or return a loading spinner
  }

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData.entries());
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    //setResponse(response.status);

    const responseData = await response.json();

    if (response.status === 200) {
      setErrorMsg('');
      router.push('/');
    } else {
      setErrorMsg('Invalid credentials');
    }
  }

  return (
    <>
      <div className="bg-black w-screen min-h-screen flex items-center justify-center">
        <form onSubmit={onSubmit} className="w-96 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {router.asPath.includes('regdone') && (
            <div className='relative'>
              <div className="bg-indigo-500 shadow-custom shadow-indigo-300 mb-6 rounded-2xl text-white p-4 text-center">
                <p>Registration successful!</p>
              </div>
            </div>
          )}
          {errorMsg && (
            <div className='relative'>
              <div className="bg-red-500 shadow-custom shadow-red-300 mb-6 rounded-2xl text-white p-4 text-center">
                <p>{errorMsg}</p>
              </div>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email / Username
            </label>
            <input
              className="bg-transparent border-b-2 border-indigo-500 rounded 
            w-full py-2 px-3 text-gray-400  leading-tight focus:outline-none focus:shadow-outline
            hover:border-indigo-200 focus:border-t-2 transition transition-border duration-700  ease-in-out"
              id="email"
              type="text"
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
          <div className="mb-3">
            <p className='text-gray-400 text-center'>Don't have an account?{' '}
              <Link href="/register" className="text-indigo-500 hover:text-indigo-300 transition duration-300 ease-in-out">
                Register
              </Link>
            </p>
          </div>
          {errorMsg && (
            <div className="mb-6">
              <p className='text-gray-400 text-center'>Forget your password?{' '}
                <Link href="/register" className="text-indigo-500 hover:text-indigo-300 transition duration-300 ease-in-out">
                  Reset
                </Link>
              </p>
            </div>
          )}
          <div className="flex items-center justify-between hover:shadow-sm">
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
    </>
  );
}