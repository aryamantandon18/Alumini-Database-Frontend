import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const signupData = JSON.parse(localStorage.getItem('signupData'));
      signupData.batchYear = parseInt(signupData.batchYear)
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...signupData, otp }),
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        console.error('Error response:', {
          status: response.status,
          statusText: response.statusText,
          data: data,
        });
        throw new Error(data.error || data || 'Unknown error');
      }

      toast.success('OTP verified successfully!');
      navigate('/login');
    } catch (error) {
      console.error('OTP Verification Error:', error);
      toast.error(`OTP verification failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${isLoading ? 'opacity-50' : ''}`} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mx-auto">Verify OTP</h2>

        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="otp">
            OTP <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full sm:w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="otp"
            name="otp"
            type="text"
            value={otp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Oval
                height={20}
                width={20}
                color="#fff"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4f46e5"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              'Verify OTP'
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default VerifyOtp;
