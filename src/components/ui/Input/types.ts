import { ReactElement } from "react";
import { FieldErrors } from "react-hook-form";

type FormFieldNames = "password" | "email";

export interface InputErrorProps {
  name: FormFieldNames;
  errors: FieldErrors;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "email" | "password";
  placeholder?: string;
  icon?: ReactElement;
  maxLength?: number;
  minLength?: number;
}
