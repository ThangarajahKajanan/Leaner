import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // If the user is already logged in, redirect to home
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple form validation
    if (!form.username || !form.password) {
      setError("Username and password are required.");
      return;
    }
    try {
      // Connect to the server via backend login API
      const response = await axios.post(
        "http://localhost:8080/api/version/users/login",
        {
          username: form.username,
          password: form.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Successfully login -> redirect to the home page
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setSuccessMessage("Successfully logged in!");
        setError(""); // Clear any previous errors
        setTimeout(() => {
          navigate("/home"); // Redirect to the home page
        }, 2000); // Set 2s delay
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError("Invalid username or password."); // Handle login failure
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:max-w-[50%] lg:max-w-[50%] lg:px-6">
        <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
          <p className="text-[32px] font-bold text-zinc-950">Sign In</p>

          {/* Display Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Display Success Message */}
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
              <strong className="font-bold">Success: </strong>
              <span className="block sm:inline">{successMessage}</span>
            </div>
          )}

          <div className="mt-6">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="text-zinc-950" htmlFor="username">
                    User Name
                  </label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-transparent"
                    id="username"
                    placeholder="Enter your username"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                  />
                  <label className="text-zinc-950 mt-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 md:mt-4 inline-flex items-center justify-center rounded-lg bg-black text-white py-3 px-4 hover:border-black"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <p className="text-sm text-zinc-950">
            Don't have an account?{" "}
            <a
              className="underline cursor-pointer text-zinc-950"
              href="/register"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;