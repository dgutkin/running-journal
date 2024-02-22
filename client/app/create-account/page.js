'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../firebase/firebase';

export default function CreateAccount() {

    const [authError, setAuthError] = useState(false);
    const [authErrorMessage, setAuthErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function handleCreateAccount(e) {

        e.preventDefault();

        const auth = getAuth(firebaseApp);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        router.push("/user");
        
    }

    return (
        
        <div className="container mx-4 max-w-md mt-16">

            <div className="bg-white p-8 rounded-lg shadow-md">

                <h2 className="text-2xl font-semibold mb-6">Create Account</h2>
    
                <div>
    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                
                    <button className="bg-dark-green text-white px-4 py-2 rounded-md hover:bg-yinmn-blue" onClick={handleCreateAccount}>
                        Create Writer
                    </button>

                    {authError && 
                        <p>{authErrorMessage}</p>
                    }

                </div>

            </div>

        </div>

    );

}
