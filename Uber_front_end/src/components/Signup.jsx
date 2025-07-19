import React from "react";
import { Input, Button } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const signup = async (data) => {
    try {
      // Proceed with signup logic (e.g. API call)
      console.log(data);
      navigate("/login");
    } catch (err) {
      setError("Signup failed. Please try again."); // API/server-side error
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
            <div className="md:flex">
              {/* Left side - Welcome section (dark) */}
              <div className="md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 p-12 text-gray-100 border-r border-gray-700">
                <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
                <p className="mb-6 text-gray-300">
                  Create your account to unlock all features and start your
                  journey with us.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <svg
                      className="h-5 w-5 mr-2 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Exclusive content</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <svg
                      className="h-5 w-5 mr-2 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Personalized dashboard</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <svg
                      className="h-5 w-5 mr-2 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>

              {/* Right side - Form (dark) */}
              <div className="md:w-1/2 p-12 bg-gray-800">
                <h1 className="text-3xl font-bold text-gray-100 mb-2">
                  Sign Up
                </h1>
                <p className="text-gray-400 mb-8">
                  Create your account in just a few steps
                </p>

                <form onSubmit={handleSubmit(signup)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="John"
                      className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                      labelClassName="text-gray-300"
                      {...register("firstName", { required: true })}
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                      labelClassName="text-gray-300"
                      {...register("lastName", { required: true })}
                    />
                  </div>

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                    labelClassName="text-gray-300"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                  <Input
                    label="Mobile Number"
                    type="tel"
                    placeholder="e.g. 9876543210"
                    className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                    labelClassName="text-gray-300"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/, // Basic Indian number pattern (change if needed)
                        message: "Enter a valid 10-digit mobile number",
                      },
                    })}
                  />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm">
                        {errors.mobile.message}
                        </p>
                    )}
                  <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                    labelClassName="text-gray-300"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-black-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}

                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-indigo-500 focus:ring-indigo-500"
                    labelClassName="text-gray-300"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}

                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-300"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-indigo-400 hover:underline">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-indigo-400 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    bgColor="bg-indigo-600"
                    textColor="text-white"
                    className="w-full hover:bg-indigo-700 transition duration-200"
                  >
                    Create Account
                  </Button>

                  <p className="text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-indigo-400 hover:underline"
                    >
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
