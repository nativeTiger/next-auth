import { FieldErrors } from "react-hook-form";
import {
  SignInFieldName,
  SignInFromType,
} from "@/components/ui/input/models/authentication";

export interface InputErrorProps {
  name: SignInFieldName;
  errors: FieldErrors<SignInFromType>;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type: "email" | "password";
  placeholder: string;
}
