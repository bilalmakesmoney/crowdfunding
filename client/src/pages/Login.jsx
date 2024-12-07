import google from "../../public/google.png";

const Login = () => {
  return (
    <div className="w-screen min-h-screen grid place-items-center px-4 sm:px-8 my-6">
      <div className="flex flex-col gap-4 bg-secondary items-center rounded-xl px-6 sm:px-12 py-8 w-full sm:w-[400px]">
        <h1 className="text-[24px] sm:text-[30px] font-semibold mb-4 text-center">
          WELCOME BACK TO FUNDRA🤩
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="h-9 rounded-md bg-background/50 border-none outline-none px-6 py-2 w-full"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="h-9 rounded-md bg-background/50 border-none outline-none px-6 py-2 w-full"
            placeholder="********"
          />
        </div>
        <button className="w-full h-9 flex justify-center items-center bg-primary rounded-md mt-4">
          Continue
        </button>
        <div className="w-full h-[0.5px] bg-white/10 my-3"></div>
        <button className="w-full h-9 flex py-1 gap-3 justify-center items-center bg-[#454545]/40 rounded-md mt-4">
          <img src={google} alt="Google" className="w-6 h-6" />
          <span>Sign up with Google</span>
        </button>
        <span className="text-white/40 font-light text-center">
          Don't have an account?{" "}
          <span className="text-blue-400">Create One</span>
        </span>
      </div>
    </div>
  );
};

export default Login;
