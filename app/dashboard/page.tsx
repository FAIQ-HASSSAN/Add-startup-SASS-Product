// app/dashboard/page.tsx
import NextAuth from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1>Welcome to Dashboard, {session.user?.name}</h1>
      </main>
    </>
  );
}
