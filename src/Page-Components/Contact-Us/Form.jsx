import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateContact = (contact) => {
    const re = /^\d{10}$/;
    return re.test(contact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !subject || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!validateContact(contact)) {
      toast.error('Contact number must be exactly 10 digits');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (message.length > 300) {
      toast.error('Message should not exceed 300 characters');
      return;
    }

    if (!name.trim() || !email.trim() || !contact.trim() || !subject.trim() || !message.trim()) {
      toast.error('Fields cannot contain only whitespace');
      return;
    }

    setIsLoading(true);

    // Retrieve JWT token from local storage
    const token = localStorage.getItem('jwtToken');

    // Define the request body
    const requestBody = {
      Name: name,
      Email: email,
      Contact: contact,
      Subject: subject,
      Message: message
    };

    try {
      const response = await axios.post('/api/contactUS', requestBody, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      // Handle success
      toast.success('Form submitted successfully');
      console.log('Success:', response.data);
      // Reset form fields
      setContact('');
      setEmail('');
      setMessage('');
      setName('');
      setSubject('');
      setRecaptchaValue(null);
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

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4">
      <form className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md ${isLoading ? 'opacity-50' : ''}`} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className='text-gray-500 text-xs py-3 '>Please use the form below to contact us</p>

        {/* Name */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 md:w-1/3 pr-4" htmlFor="email">
            Personal Email Id <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="contact">
            Contact No <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="contact"
            type="text"
            placeholder="Your Contact No"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="subject">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col sm:flex-row mb-2">
          <label className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="message"
            placeholder="Your message up to 300 characters"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
          />
        </div>

        {/* reCAPTCHA and Submit button */}
        <div className="flex flex-row mb-2">
          <div className="block pt-2 mb-1 sm:w-1/3 sm:pr-4"></div>
          <div className="appearance-none rounded w-full mt-1 text-gray-700 leading-tight focus:outline-none focus:bg-white">
            <ReCAPTCHA
              sitekey="YOUR_SITE_KEY" // Replace with your actual site key
              onChange={handleRecaptchaChange}
            />
            <button
              className="bg-green-500 hover:bg-green-700 mt-2 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
      <br />

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

      {/* Icons and Links */}
      <div className="flex flex-row">
        <a href="https://bpitindia.com/" target="_blank" rel="noopener noreferrer" className="mr-4 flex flex-row">
          <img className="w-10 mr-1" src="https://bpitindia.com/img/favicon.png" alt="BPIT Logo" />
          <span className='text-black'>BPIT</span>
        </a>
        <a href="https://www.linkedin.com/in/vani-rastogi-471105260/" target="_blank" rel="noopener noreferrer" className="text-black">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Form;
