import { z } from "zod";

// Signin Form Schema
export const SignInFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email()
    .trim()
    .toLowerCase(),
  password: z.string().nonempty({ message: "Password is required" }),
});

export type SignInFromType = z.infer<typeof SignInFormSchema>;

export type SignInFieldName = "password" | "email";
