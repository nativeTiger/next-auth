import { ErrorMessage } from "@hookform/error-message";
import { FC } from "react";
import { InputErrorProps } from "@/components/ui/input/input-types";

export const InputErrorMessage: FC<InputErrorProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="form__error">{message}</p>}
    />
  );
};
