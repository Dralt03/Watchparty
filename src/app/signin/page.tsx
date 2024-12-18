"use client";
import SignInForm from "@/ui/SignInForm";

const Page: React.FC = () => {
  const handleSignIn = (email: string, password: string) => {
    console.log(email, password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignInForm onSubmit={handleSignIn} />
    </div>
  );
};

export default Page;
