import LoginForm from "@/components/pages/login/LoginForm";

const Auth = () => {
  return (
    <div className="w-full h-full rounded-xl bg-white flex justify-center items-center gap-3 px-2 py-4">
      <div className="w-11/12 md:w-1/2 lg:w-2/5 h-full py-1 flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Auth;
