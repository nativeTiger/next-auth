"use client";

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ClientSafeProvider, LiteralUnion, signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  SignInFormSchema,
  SignInFromType,
} from "@/components/ui/input/models/authentication";
import "./forms.scss";
import { useSearchParams } from "next/navigation";

interface SignInFormProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

export const SignInForm: FC<SignInFormProps> = ({ providers }) => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const methods = useForm<SignInFromType>({
    resolver: zodResolver(SignInFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<SignInFromType> = ({ email, password }) => {
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <>
      <FormProvider {...methods}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
            errors={errors}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
            errors={errors}
          />
          <Button
            type="submit"
            className="bg-blue-500 text-white text-center block !mt-6 shadow-md"
          >
            Sign In
          </Button>
        </form>
      </FormProvider>
      {error ? (
        <h3 className="text-center font-semibold rounded-md py-1 my-2 text-red-500">
          Invalid Credentials
        </h3>
      ) : (
        ""
      )}
      <p className="form__break-line">or</p>
      <div className="flex items-center justify-between">
        {providers &&
          Object.values(providers).map(
            (provider) =>
              provider.type !== "credentials" && (
                <div key={provider.name}>
                  <Button
                    type="button"
                    className="border-2 font-medium hover:bg-transparent hover:text-inherit text-xs"
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/",
                      })
                    }
                  >
                    {provider.id === "google" && <FcGoogle />}
                    {provider.id === "github" && <FaGithub />}
                    Sign in with {provider.name}
                  </Button>
                </div>
              )
          )}
      </div>
    </>
  );
};
