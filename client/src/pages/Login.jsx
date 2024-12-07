import google from "../../public/google.png";

const Login = () => {
  return (
    <div className="w-screen min-h-screen grid place-items-center">
      <div className="flex flex-col gap-3 bg-secondary items-center rounded-xl px-12 py-8">
        <h1 className="text-[30px] font-semibold mb-4">
          WELCOME BACK TO FUNDRA🤩
        </h1>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="h-9 rounded-md bg-background/50 border-none outline-none px-6 py-2 w-full"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="h-9 rounded-md bg-background/50 border-none outline-none px-6 py-2 w-full"
            placeholder="********"
          />
        </div>
        <button className="w-full h-9 flex justify-center items-center bg-primary rounded-md mt-4">
          Continue
        </button>
        <div className="w-full h-[0.5px] bg-white/10 my-3"></div>
        <button className="w-full h-9 flex py-1 gap-3 justify-center items-center bg-[#454545]/40 rounded-md mt-4">
          <img src={google} alt="" className="w-6 h-6" />
          <span>Sign up with Google</span>
        </button>
        <span className="text-white/40 font-light">
          Don't have an account?{" "}
          <span className="text-blue-400">Create One</span>
        </span>
      </div>
    </div>
  );
};
export default Login;
