import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/ui/form/signin-form";
import { options } from "../[...nextauth]/options";

export default async function signInPage() {
  const providers = await getProviders();
  const session = await getServerSession(options);

  if (session) {
    return redirect("/");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-large p-6 bg-white rounded-md">
        <h1 className="form__title">Welcome back!</h1>
        <SignInForm providers={providers} />
      </div>
    </div>
  );
}
