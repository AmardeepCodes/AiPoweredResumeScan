import React, { useState } from 'react'
import { Link } from "react-router-dom";
import API from '../utils/API';
import { useNavigate } from "react-router-dom";



const Signup = () => {
  
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState(false) 


  const handleSubmit =async (e)=> {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
     
    try {
         const res = await API.post("/auth/signup", formData)
        // setSuccess(true);
      
              navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
         setSubmitError(
          error.response?.data?.message || "Something went wrong"
        );
    } finally {
        setLoading(false);
    }

  }

  const handleChange = (e)=> {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  };

  return (

    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1a3a] to-[#020617] text-white'>
         
         <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
             {/* Title*/}
             <h2 className="text-2xl font-semibold text-center mb-2">
                Create your account
             </h2>
             <p className="text-sm text-gray-300 text-center mb-6">
                Join the next generation of career intelligence.
             </p>

              {/* Social buttons */}
                <div className="flex gap-4 mb-6">
                <button className="flex-1 bg-white/10 py-2 rounded-lg hover:bg-white/20">
                    Google
                </button>
                <button className="flex-1 bg-white/10 py-2 rounded-lg hover:bg-white/20">
                    LinkedIn
                </button>
                </div>

                <div className="text-center text-gray-400 text-sm mb-4">
                OR CONTINUE WITH EMAIL
                </div>
        
                    {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {submitError && (
            <p className="text-red-400 text-sm">{submitError}</p>
          )}

          {success && (
            <p className="text-green-400 text-sm">Account created!</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-400 to-indigo-500 hover:opacity-90 transition"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
         <Link to="/login" className="text-white hover:underline">
            Log in
         </Link>
        </p>
                 

         </div>
    </div>
  )


}

export default Signup
