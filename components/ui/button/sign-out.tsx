"use client";

import { FC } from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";

export const SignOutButton: FC = () => {
  return (
    <Button
      className="bg-blue-500 text-white text-center block shadow-md hover:drop-shadow-2xl"
      type="button"
      onClick={() => signOut({ callbackUrl: "/", redirect: true })}
    >
      Sign out
    </Button>
  );
};
