"use client";
import SignInForm from "@/ui/SignInForm";

const Page = () => {
  const handleSignIn = (email: string, password: string) => {
    console.log(email, password);
  };
  return (
    <main className="flex items-center justify-center min-h-screen bg-indigo-100">
      <SignInForm onSubmit={handleSignIn} />
    </main>
  );
};

export default Page;
