import  { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from 'axios';

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { email, password } = formData;
  
    // Validate input
    // if (!email || !password) {
    //   toast.error("Please fill in all required fields");
    //   return;
    // }
  
    // if (!validateEmail(email)) {
    //   toast.error("Please enter a valid email");
    //   return;
    // }
  
    // if (!recaptchaValue) {
    //   toast.error("Please complete the reCAPTCHA");
    //   return;
    // }
  
    setIsLoading(true);
  
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      const data = response.data;
  
      if (response.status === 200) {
        localStorage.setItem("jwtToken", data.token);
        login()
        toast.success("Login successful");
        navigate('/')
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div className="h-full w-full flex items-center justify-center mt-20 flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form
        className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${
          isLoading ? "opacity-50" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-gray-500 text-xs py-3 text-center">
          Please use the form below to log in
        </p>

        {/* Email */}
        <div className="flex flex-col sm:flex-row mb-4">
          <label
            className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col sm:flex-row mb-4">
          <label
            className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
            htmlFor="password"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            type="password"
            placeholder="Your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* reCAPTCHA */}
        {/* <div className="flex justify-center mb-4">
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY" // Replace with actual site key
            onChange={handleRecaptchaChange}
          />
        </div> */}

        {/* Submit button */}
        <div className="flex justify-center mb-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Login"}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-center mb-2">
          <Link to="/ForgetPassword" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Signup Link */}
        <div className="flex justify-center">
          <p className="text-sm">
            {" "}
            <Link to="/signup" className="text-blue-500 hover:underline ml-1">
              Signup
            </Link>
          </p>
        </div>
      </form>

      {isLoading && (
        <div className="flex justify-center items-center h-full w-full absolute top-0 left-0">
          <Oval
            height={40}
            width={40}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={2}
          />
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Login;
