import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: Readonly<ProtectedLayoutProps>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500">
        <Navbar />
        {children}
      </div>
    </SessionProvider>
  );
}
