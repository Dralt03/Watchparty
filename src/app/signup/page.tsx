"use client";
import SignUpForm from "@/ui/SignUpForm";
import React from "react";

const page: React.FC = () => {
  const handleSignUp = (email: string, password: string, username: string) => {
    console.log(email, password, username);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-200">
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default page;
