'use client';

import { signIn , signOut , useSession } from "next-auth/react";

export default function Home() {

  const {data : session} = useSession();

  return session ? (
    <div>
      <img src={session.user?.image ?? ''} alt="avatar" width={40}/>
      <span>{session.user?.email}</span>
      <span>{session.user?.id}</span>
      <span>{session.user?.name}</span>
      <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  ) : (
    <div className="w-full m-auto mt-20 px-20">
       <button onClick={()=>signIn('google')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue With Google</button>
    </div>
  )
}
