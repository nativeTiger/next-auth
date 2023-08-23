import React, { HTMLProps, MouseEventHandler } from "react";

export type ButtonTypes = {
  id?: string;
  icon?: React.JSX.Element;
  type: "button" | "submit";
  className?: HTMLProps<HTMLElement>["className"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children?: React.ReactNode;
};
