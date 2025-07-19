import React from "react";
import { useState } from "react";
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

  const [error, setError] = useState("");
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
    <div className="flex items-center justify-center min-h-screen bg-white p-4 font-sans">
            <div className="w-full max-w-md mx-auto">
                
                <h1 className="text-3xl font-bold text-black mb-8">
                    Create your account
                </h1>

                {error && <p className="bg-red-100 text-red-700 border border-red-300 p-3 rounded-md text-center mb-6">{error}</p>}

                <form onSubmit={handleSubmit(signup)} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            label="First Name"
                            {...register("firstName", { required: "First name is required" })}
                        />
                        <Input
                            label="Last Name"
                            {...register("lastName", { required: "Last name is required" })}
                        />
                    </div>

                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="eg. abc@xyz.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Please enter a valid email address",
                            },
                        })}
                    />

                    <Input
                        label="Phone Number"
                        type="tel"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Phone number must be 10 digits",
                            },
                        })}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
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



                    <div className="flex items-start pt-2">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 mt-0.5 text-black focus:ring-black border-gray-300 rounded"
                            {...register("terms", { required: "You must accept the terms" })}
                        />
                        <label htmlFor="terms" className="ml-3 block text-sm text-gray-600">
                            I agree to the{" "}
                            <Link to="/terms" className="text-black hover:underline font-medium">
                                Terms and Privacy Policy
                            </Link>
                        </label>
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            bgColor="bg-black"
                            textColor="text-white"
                            className="hover:bg-gray-800 transition-colors duration-200"
                        >
                            Create Account
                        </Button>
                    </div>

                    <p className="text-center text-sm text-gray-600 pt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-black hover:underline">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
  );
}

export default Signup;
