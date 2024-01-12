import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, Logo, Button, Input } from "../index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../Appwrite/auth";
function Singup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const singup = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        let userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline">
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error} </p>}
      </div>
      <form onSubmit={handleSubmit(singup)}>
        <div className="space-y-5">
          <Input
            label="Name: "
            type="text"
            placeholder="Please Enter your name"
            {...register("name", {
              required: true,
              maxLength: 80,
            })}
          />
          <Input
            label="Email: "
            type="email"
            placeholder="Enter your Email here"
            {...register("email", {
              required: true,
              validate: {
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              },
            })}
          />
          <Input
            label="Password: "
            type="passsword"
            placeholder="Please enter your password"
            {...register("password", {
              required: true,
              validate: {
                matchPatern: (value) => {
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(
                    value
                  ) || "Enter the correct password";
                },
              },
            })}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Singup;
