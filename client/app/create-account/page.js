
import Link from 'next/link';

export default function CreateAccount() {

    return (
        
        <div className="container mx-4 max-w-md mt-16">

            <div className="bg-white p-8 rounded-lg shadow-md">

                <h2 className="text-2xl font-semibold mb-6">Create Account</h2>
    
                <form>
    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                    </div>

                
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"/>
                    </div>

                
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800">
                        <Link href="/user">Log In</Link>
                    </button>

                </form>

            </div>

        </div>

    );

}