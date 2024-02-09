'use client'

import Link from 'next/link';

export default function Login() {

    return (
        
        <div className="flex">
        
            <div className="container mx-8 max-w-md mt-8">

                <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md">

                    <h2 className="text-2xl font-semibold mb-6">Login</h2>
        
                    <form>
        
                        <div className="mb-4 mt-6">
                            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                        </div>

                    
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
                            <input type="password" id="password" name="password" placeholder="Your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                        </div>

                    
                        <button className="bg-dark-green text-white px-4 py-2 mt-6 rounded-md hover:bg-yinmn-blue focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-yinmn-blue">
                            <Link href="/user">Log In</Link>
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}