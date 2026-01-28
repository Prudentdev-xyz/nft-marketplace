import { UserRound } from "lucide-react";
import React from "react";

export const SignUp = ({ children }) => {
  return (
    <button className="bg-CTA flex px-2 py-2 md:px-6 md:py-4  text-white font-semibold rounded-2xl gap-2">
      <UserRound /> Sign Up
    </button>
  );
};
