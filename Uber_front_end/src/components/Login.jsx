import React from "react";
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { Input , Button } from "./index";


function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError("");
        try {
            console.log("Login data:", data);
            // In a real app, you'd perform authentication here
            navigate("/");
        } catch (err) {
            setError("Login failed. Please check your credentials.");
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-4 font-sans">
            <div className="w-full max-w-md mx-auto">

                <h1 className="text-3xl font-bold text-black mb-8">
                    Welcome back
                </h1>

                {error && <p className="bg-red-100 text-red-700 border border-red-300 p-3 rounded-md text-center mb-6">{error}</p>}

                <form onSubmit={handleSubmit(login)} className="space-y-6">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Email address must be a valid address",
                            }
                        })}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-gray-700"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="/forgot-password"
                            className="font-medium text-black hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <div className="pt-2">
                        <Button
                            type="submit"
                            className="hover:bg-gray-800 transition-colors duration-200"
                        >
                            Sign In
                        </Button>
                    </div>

                    <p className="text-center text-sm text-gray-600 pt-2">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-medium text-black hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Login;
