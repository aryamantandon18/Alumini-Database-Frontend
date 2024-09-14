import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner'; // Import the Oval component

const FeedbackModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !feedback) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (feedback.length > 300) {
      toast.error('Feedback should not exceed 300 characters');
      return;
    }

    setIsLoading(true);

    // Retrieve JWT token from local storage
    const token = localStorage.getItem('jwtToken');

    // Define the request body
    const requestBody = {
      Name: name,
      Email: email,
      Feedback: feedback
    };

    try {
      const response = await axios.post('/api/feedback', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      // Handle success
      toast.success('Feedback submitted successfully'); // Success toast message
      console.log('Success:', response.data);
      // Reset form fields
      setName('');
      setEmail('');
      setFeedback('');
      onClose(); // Close the modal on success
    } catch (error) {
      // Handle error
      if (error.response) {
        toast.error(`Error: ${error.response.data.error}`);
      } else {
        toast.error('Request failed');
        console.error('Request failed:', error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4 text-black">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              id="feedback"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div className='flex justify-center items-center h-full w-full absolute top-0 left-0'>
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

export default FeedbackModal;
