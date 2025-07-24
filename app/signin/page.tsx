'use client';

import React from 'react'
import { signIn } from 'next-auth/react';

export default function SignInPage(){
    return(
        <div className='p-8'>
            <h1>Sign In</h1>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={()=>signIn('google',{callbackUrl: '/dashboard'})}> 
                Continue with Google
            </button>
        </div>
    )
}
