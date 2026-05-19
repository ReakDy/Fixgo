import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#0F172A] p-10 rounded-3xl shadow-2xl text-white">

        <h1 className="text-4xl font-bold text-cyan-400 mb-2 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to your FixGo account
        </p>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#1E293B] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#1E293B] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400"
          />

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 py-4 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;