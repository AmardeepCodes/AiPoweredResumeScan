import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from '../utils/API';
import { useNavigate } from "react-router-dom";

const Login = () => {

   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e) => {
       e.preventDefault();
       setLoading(true);
       setSubmitError("");
     try {
       const res = await API.post("/auth/login", formData);

        // setSuccess(true);
        navigate("/dashboard"); // Redirect to dashboard after successful login
      
     } catch (error) {
       setSubmitError(
         error.response?.data?.message || "Something went wrong"
       );
     }

    }

       const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



   


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1220] to-[#0f1a2e] flex items-center justify-center text-white">
      
      <div className="w-full max-w-md bg-[#121a2b]/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
        
        {/* Logo + Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">JustCareer AI</h1>
          <h2 className="text-xl mt-2 font-bold">Welcome Back</h2>
          <p className="text-gray-400 text-sm mt-1">
            Continue your journey to atmospheric precision.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-[#0b1220] border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between text-sm text-gray-300">
              <label>Password</label>
              <span className="cursor-pointer hover:text-purple-400">
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-[#0b1220] border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500 font-semibold hover:opacity-90 transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Divider */}
          <div className="text-center text-gray-400 text-sm mt-4">
            OR CONTINUE WITH
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-3">
            <button className="flex-1 py-2 bg-[#0b1220] rounded-lg border border-white/10 hover:bg-white/5">
              Google
            </button>
            <button className="flex-1 py-2 bg-[#0b1220] rounded-lg border border-white/10 hover:bg-white/5">
              LinkedIn
            </button>
          </div>

          {/* Footer */}
         <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Get Started
            </Link>
          </p>

          {submitError && (
            <p className="text-red-400 text-sm text-center">{submitError}</p>
          )}

          {success && (
            <p className="text-green-400 text-sm text-center">
              Login Successful!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
