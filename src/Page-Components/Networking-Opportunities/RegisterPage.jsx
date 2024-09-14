import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

function RegisterPage() {
  const { title } = useParams(); // Extract the event title from URL

  // Mock data for event (replace with actual data or fetch from API)
  const eventData = {
    title: "Annual Alumni Reunion",
    date: "July 20, 2024",
    location: "College Campus",
    image:
      "https://png.pngtree.com/background/20210711/original/pngtree-opening-event-poster-background-picture-image_1097803.jpg",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLocaleLowerCase());
  };

  const validateContact = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!validateContact(phone)) {
      toast.error("Contact number must be exactly 10 digits");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (message.length > 300) {
      toast.error("Comments should not exceed 300 characters");
      return;
    }

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      toast.error("Fields cannot contain only whitespace");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Form submitted successfully");
      console.log({ name, email, phone, comments });
      setPhone("");
      setEmail("");
      setComments("");
      setName("");
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-12">
      <img
        src={eventData.image}
        alt={eventData.title}
        className="w-full h-auto rounded-lg"
      />
      <h1 className="text-3xl font-semibold text-center mt-4">
        {eventData.title}
      </h1>
      <p className="text-center text-gray-600">{`Date: ${eventData.date}`}</p>
      <p className="text-center text-gray-600 mb-6">{`Location: ${eventData.location}`}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Registration form fields */}
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="text"
            placeholder="Your Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone:
          </label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Comments:
          </label>
          <textarea
            id="text"
            name="message"
            placeholder="Message upto 300 characters"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#518DAF] hover:bg-[#457a98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-white bg-opacity-75">
          <Oval
            height={40}
            width={40}
            color="#4fa94d"
            secondaryColor="#4fa94d"
            strokeWidth={4}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
