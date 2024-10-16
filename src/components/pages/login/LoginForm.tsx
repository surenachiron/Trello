import { Input } from "@/components/ui/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { LoginFormSchema, LoginFormType } from "./validation";
import { Button } from "@/components/ui/Buttons/Button";

const LoginForm = () => {
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    localStorage.setItem("token", data.email);
    return window.location.replace("/");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[90vh] w-[90%] tablet:w-full desktop:w-3/4">
      <img
        src="/useLogo.png"
        alt="instagram typography logo"
        width={60}
        height={60}
      />
      <FormProvider {...methods}>
        <form
          className="flex flex-col justify-center items-center gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-start gap-3 w-full">
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email address"
              errors={errors}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="please enter yor password"
              errors={errors}
            />
            <Button variant="contained" color="primary" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
