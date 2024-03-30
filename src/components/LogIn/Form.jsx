// Import necessary dependencies
import image from "../../assets/images/Aceprep.png";
import { useState } from "react";
import * as emoji from "node-emoji";
import Lottie from "react-lottie";
import hello from "../../assets/lotties/hello";
import { GoogleLogin } from "@react-oauth/google";

const DisableScrollComponent = () => {
  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Find wave emoji
  const emoji2 = emoji.find("wave");

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Retrieve email and password from state variables
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await fetch("http://your-backend-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-gray-100 to-blue-900 flex justify-center items-center h-screen fixed-div">
      <div className="max-w-md w-full p-6 bg-white shadow-md bg-opacity-30 backdrop-blur-sm rounded-3xl">
        <div className="text-center">
          <div className="flex w-20 mx-auto">
            <img
              src={image}
              className="mx-auto justify-center items-center"
              alt="Aceprep Logo"
            />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Welcome Back!</h2>
          <Lottie options={defaultOptions} height={100} width={200} />
          <p className="text-gray-600">
            Glad to see you again {emoji2.emoji}, <br />
            Login to your account below
          </p>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none bg-[#e8ebf2] hover:opacity-100 hover:bg-white focus:border-blue-500 transition duration-300 focus:opacity-100 text-black text-opacity-100"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded bg-[#e8ebf2] focus:outline-none hover:bg-white hover:opacity-100 focus:border-blue-500 transition duration-300 focus:opacity-100"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default DisableScrollComponent;
