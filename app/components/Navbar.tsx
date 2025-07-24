"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-100">
      <Link href="/">Home</Link>
      <div>
        {session ? (
          <>
            <span className="mr-4">{session.user?.name}</span>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <Link href="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
}
