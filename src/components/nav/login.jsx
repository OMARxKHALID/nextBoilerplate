import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 border p-2 rounded-md border-zinc-400 hover:border-green-500 transition-all px-8 animate-fade"
      onClick={() => signIn("github")}
    >
      <GitHubLogoIcon /> Login
    </Button>
  );
}
