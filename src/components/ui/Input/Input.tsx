"use client";

import { FC, useState } from "react";
import { InputProps } from "./types";
import { InputErrorMessage } from "./InputErrorMessage";
import { useFormContext } from "react-hook-form";

export const Input: FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  errors,
  icon,
  maxLength,
  minLength,
}) => {
  const [inputPhrase, setInputPhrase] = useState("");
  const { register } = useFormContext();
  const iconElem = (
    <span className="absolute top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2">
      {icon ? icon : ""}
    </span>
  );

  return (
    <div className="w-full">
      <div className="w-full">
        <label htmlFor={name} className="text-dark text-sm md:text-md">
          {label}
        </label>
        <div className="relative w-full">
          {icon && iconElem}
          <input
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className={
              "border border-300 rounded-md px-4 py-2 w-full text-md text-zinc-500 outline-0"
            }
            maxLength={maxLength}
            minLength={minLength}
            onChange={(event) => {
              setInputPhrase(event.target.value);
            }}
          />
          {maxLength && (
            <span className="absolute text-primary left-2 -bottom-6 text-sm">
              {maxLength}/{inputPhrase.length}
            </span>
          )}
        </div>
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
