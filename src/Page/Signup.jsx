import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    password: '',
    confirmPassword: '',
    batchYear: '',
    branch: '',
    status: '',
    mobileNo: '',
    email: '',
    enrollmentNo: '',
    degree: 'B.Tech',
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEnrollmentNumber = (enrollmentNo) => /^[A-Za-z0-9]+$/.test(enrollmentNo);
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateBatchYear = (batchYear) => /^\d{4}$/.test(batchYear);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobileNumber = (mobileNo) => /^\d{10}$/.test(mobileNo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, fatherName, password, confirmPassword, batchYear, branch, status, mobileNo, email, enrollmentNo, degree } = formData;

    if (!firstName || !lastName || !fatherName || !password || !confirmPassword || !batchYear || !branch || !status || !mobileNo || !email || !enrollmentNo) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!validateName(firstName) || !validateName(lastName) || !validateName(fatherName)) {
      toast.error('Names must contain only letters and spaces');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (!validateBatchYear(batchYear)) {
      toast.error('Batch Year must be a 4-digit number');
      return;
    }
    if (!validateEnrollmentNumber(enrollmentNo)) {
      toast.error('Enrollment number must be alphanumeric');
      return;
    }
    if (!validateMobileNumber(mobileNo)) {
      toast.error('Mobile number must be a 10-digit number');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          FirstName: firstName,
          LastName: lastName,
          Fathername: fatherName,
          Password: password,
          Status: status,
          Branch: branch,
          BatchYear: parseInt(batchYear),
          MobileNo: mobileNo,
          Email: email,
          EnrollmentNo: enrollmentNo,
          Degree: degree,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error');
      }

      const data = await response.json();

      if (data.message === 'OTP sent successfully') {
        toast.success('OTP sent successfully');
        localStorage.setItem('signupData', JSON.stringify(formData));
        window.location.href = '/verifyOTP';
      } else {
        toast.success('Signup successful');
      }

      setFormData({
        firstName: '',
        lastName: '',
        fatherName: '',
        password: '',
        confirmPassword: '',
        batchYear: '',
        branch: '',
        status: '',
        mobileNo: '',
        email: '',
        enrollmentNo: '',
        degree: 'B.Tech',
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Signup failed. Please try again later. Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${isLoading ? 'opacity-50' : ''}`} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mx-auto">Signup</h2>
        <p className='text-gray-500 text-xs py-3'>Please use the form below to sign up</p>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="fatherName">
            Father Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="fatherName"
            name="fatherName"
            type="text"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="confirmPassword">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="batchYear">
            Batch Year <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="batchYear"
            name="batchYear"
            type="number"
            value={formData.batchYear}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="branch">
            Branch <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="branch"
            name="branch"
            type="text"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="status">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            className="bg-gray-200 border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select status</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>


        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="mobileNo">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="mobileNo"
            name="mobileNo"
            type="text"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="enrollmentNo">
            Enrollment Number <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="enrollmentNo"
            name="enrollmentNo"
            type="text"
            value={formData.enrollmentNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="degree">
            Degree <span className="text-red-500">*</span>
          </label>
          <select
            className="bg-gray-200 border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          >
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MCA">MCA</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Oval height={20} width={20} color="white" /> : 'Signup'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
