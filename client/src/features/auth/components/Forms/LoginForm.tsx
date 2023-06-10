import { Title } from "./Common/Title";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <form className="flex flex-col px-6 py-8 font-['Inter'] text-gray-200">
      <Title title="Hydration" />
      <div className="mb-4 flex flex-col gap-1">
        <label className="" htmlFor="email">
          Email address
        </label>
        <input
          className="w-full rounded-md border border-gray-300 bg-gray-800 px-2 py-1 text-gray-200"
          id="email"
          type="text"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <label className="" htmlFor="pwd">
          Your Password
        </label>
        <input
          className="w-full rounded-md border border-gray-300 bg-gray-800 px-2 py-1 text-gray-200"
          id="pwd"
          type="password"
        />
      </div>
      <button className="mb-8 w-full rounded-md bg-blue-400 py-1 font-bold text-gray-50">
        Sign in
      </button>
      <div className="flex flex-col items-center gap-1 font-light underline">
        <a>Forgot your password?</a>
        <Link to="/account/register">Don't have an account? Sign up</Link>
      </div>
    </form>
  );
};