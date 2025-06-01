import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement sign in logic
    console.log("Signing in with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-charcoal-deep flex items-center justify-center px-4">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-gray-800/50 border-gray-700/50"
      >
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-6">
            <Link to="/" className="text-3xl font-bold text-gray-50">
              Compare<span className="text-green-400">AI</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-semibold text-gray-50">
            Welcome back
          </CardTitle>
          <CardDescription className="text-gray-400">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500
                  focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500
                  focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 text-lg
                transition-colors duration-200"
            >
              Sign In
            </Button>
          </CardContent>
        </form>
        <CardFooter className="justify-center pb-8">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </MotionCard>
    </div>
  );
} 