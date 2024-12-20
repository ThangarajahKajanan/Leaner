import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Basic form validation
    if (!form.username || !form.password || !form.confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // API request to register the user
      const response = await axios.post(
        'http://localhost:8080/api/version/users/register',
        {
          username: form.username,
          password: form.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setForm({
          username: '',
          password: '',
          confirmPassword: '',
        });

        // Redirect to login page after a short delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Error occurred while registering. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:max-w-[50%] lg:max-w-[50%] lg:px-6">
        <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
          <p className="text-[32px] font-bold text-zinc-950">Sign Up</p>
          <p className="mb-2.5 mt-2.5 font-normal text-zinc-950">Create a new account by filling out the form below!</p>
          
          {/* Show error or success messages */}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {successMessage && <div className="text-green-500 text-sm mt-2">{successMessage}</div>}

          <div className="mt-8">
            <form className="pb-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:fv hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6"
                type="button"
                onClick={() => console.log('Sign up with Google')}
              >
                <span className="mr-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                      C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>
                <span className="text-zinc-950">Sign up with Google</span>
              </button>
            </form>
          </div>

          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-200"></div>
              <div className="grow border-t border-zinc-200"></div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="text-zinc-950" htmlFor="username">Username</label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-transparent"
                    id="username"
                    placeholder="name@example.com"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                  />
                  <label className="text-zinc-950 mt-2" htmlFor="password">Password</label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-transparent"
                  />
                  <label className="text-zinc-950 mt-2" htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-5">
                <button
                  className="w-full rounded-lg bg-black text-white px-4 py-3 text-center font-medium"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;