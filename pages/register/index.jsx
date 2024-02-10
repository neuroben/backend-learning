import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [errMsg, setErrMsg] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPassword, setEmail] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    const checkPasswordMatch = (password, confirmPassword) => {
        setErrMsg(password !== confirmPassword ? 'Passwords do not match' : '');
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

       // console.log(data);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

     //   const responseData = await response.json();
     //   if (responseData.message != 'ok') {
     //       setErrMsg(responseData.status);
     //   }

    }
    return (
        <div className="bg-black w-screen min-h-screen flex items-center justify-center">
            <form onSubmit={onSubmit} className="w-96 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="bg-transparent border-b-2 border-indigo-500 rounded 
                        w-full py-2 px-3 text-gray-400  leading-tight focus:outline-none focus:shadow-outline
                        hover:border-indigo-200 focus:border-t-2 transition duration-300 ease-in-out"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        onChange={(event) => {setErrMsg('');}}
                        name="email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Username
                    </label>
                    <input
                        className="bg-transparent border-b-2 border-indigo-500 rounded 
                        w-full py-2 px-3 text-gray-400  leading-tight focus:outline-none focus:shadow-outline
                        hover:border-indigo-200 focus:border-t-2 transition duration-300 ease-in-out"
                        id="username"
                        type="username"
                        placeholder="Enter your username"
                        onChange={(event) => {setErrMsg('');}}
                        name="username"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="bg-transparent border-b-2 border-indigo-500 rounded 
                        w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline
                        hover:border-indigo-200 focus:border-t-2 transition duration-300 ease-in-out"
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Enter your password'
                        onChange={(event) => {
                            const newPassword = event.target.value;
                            setPassword(newPassword);
                            if (confirmPassword) {
                                checkPasswordMatch(newPassword, confirmPassword);
                            }
                        }}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordAgain">
                        Password again
                    </label>
                    <input
                        className="bg-transparent border-b-2 border-indigo-500 rounded 
                        w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline
                        hover:border-indigo-200 focus:border-t-2 transition duration-300 ease-in-out"
                        id="confirmPassword"
                        type="password"
                        placeholder='Confirm your password'
                        onChange={(event) => {
                            const newConfirmPassword = event.target.value;
                            setConfirmPassword(newConfirmPassword);
                            checkPasswordMatch(password, newConfirmPassword);
                        }}
                        required
                    />
                </div>
                {errMsg && (
                    <div className="mb-3 transition-all duration-700 ease-in-out overflow-hidden max-h-20">
                        <p className='text-red-700 text-center'>{errMsg}</p>
                    </div>
                )}
                <div className="flex items-center justify-center text-center mb-3">
                    <input
                        className='mr-2 acent-gray-400'
                        type="checkbox"
                        name="terms"
                        id="terms"
                        onChange={(event) => setTermsChecked(event.target.checked)}
                        required />
                    <p className='text-gray-400'>Agree to {' '}
                        <Link href="/register" className="text-indigo-500 hover:text-indigo-300 transition duration-300 ease-in-out">
                            Terms and Conditions
                        </Link>
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className={`bg-transparent border-b-2 border-indigo-500 rounded 
                        w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline
                        hover:border-indigo-200 hover:border-t-2 hover:shadow-2xl hover:shrink-white transition duration-300 ease-in-out 
                        ${!!errMsg || !termsChecked || !password || !confirmPassword ? 'disabled:border-gray-800 disabled:text-gray-800 pointer-events-none' : ''}`}
                        type="submit"
                        disabled={!!errMsg || !termsChecked || !password || !confirmPassword}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}