"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side for image, takes 2/3 width */}
      <div className="hidden md:flex w-2/3 bg-[#d7ded4] items-center justify-center">
        <img
          src="https://i.ibb.co.com/mXYL47F/logo-removebg-preview.png" // Ganti dengan path gambar Anda
          alt="Login Illustration"
          className="object-cover h-full"
        />
      </div>

      {/* Right side for login form, takes 1/3 width */}
      <div className="flex w-full md:w-1/3 items-center justify-center p-8">
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://i.ibb.co.com/mXYL47F/logo-removebg-preview.png" // Ganti dengan path logo Anda
              alt="Small Room Soul Logo"
              className="h-16" // Atur ukuran logo sesuai kebutuhan
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-[#004d40] mb-6">
            Login to Small Room Soul
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-[#8d6e63]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-[#8d6e63]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white bg-[#004d40] rounded-lg hover:bg-[#00695c] transition-colors"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-sm text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center py-3 font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FcGoogle className="mr-2 text-xl" />
            Login with Google
          </button>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#8d6e63] hover:underline">
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
