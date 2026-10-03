import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-sky-50 gap-6">
      <div className="flex items-center flex-col gap-2">
        <Image
          src="/cpu-logo.jpg"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full shadow-md object-cover"
          priority
        />
        <h1 className="text-2xl font-bold text-gray-800">Class Unity</h1>
      </div>
      
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
            card: "shadow-xl border border-gray-100 rounded-lg",
          },
        }}
        fallbackRedirectUrl="/dashboard/admin"
      />
    </div>
  );
}