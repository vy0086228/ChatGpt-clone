import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Redirect after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8081/api/users/login",
        {
          email,
          password,
        }
      );

      console.log("Login Successful:", response.data);

      // Save user data & token in localStorage
      localStorage.setItem("userInfo", JSON.stringify(response.data));

      navigate("/"); // Redirect to home or chat page after login
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-0">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back to ChatbotApp!
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-indigo-600 text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 
                dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
