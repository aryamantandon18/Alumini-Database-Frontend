import React from "react";
import phonescreen from "./mobileapp.jpg";
import qrcode from "./qrcode.jpg";

const MobileApp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="flex-1 flex justify-center max-w-md">
        <img
          src={phonescreen}
          alt="Phone Screen"
          className="w-[240px] h-[500px]"
        />
      </div>
      <div
        className="flex-1 text-center md:text-left mt-6 md:mt-0 md:ml-8 max-w-md"
        style={{ maxWidth: "483.33px" }}
      >
        <h1 className="text-xl md:text-2xl">
          Access the official{" "}
          <span className="text-red-500">Alumni Network</span> of
          <br />
          Bhagwan Parshuram Institute of Technology,
          <br />
          New Delhi on mobile
        </h1>
        <p className="mt-4 text-gray-700 text-sm md:text-base">
          Want convenience? Scan the QR code and register to your Alumni Network
          straight from your mobile!
          <br />
          <br />
          On Bhagwan Parshuram Institute of Technology, New Delhi's My Alumni
          Network app, search, view and connect with your alumni on the go.
        </p>
        <div className="flex items-center space-x-2 mt-4">
          <div className="text-center border-r pr-4">
            <p className="text-sm">Find your Alumni</p>
          </div>
          <div className="text-center border-r pr-4">
            <p className="text-sm">Discuss and Engage</p>
          </div>
          <div className="text-center border-r pr-4">
            <p className="text-sm">Jobs & Internships</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Join Groups</p>
          </div>
        </div>

        <div className="flex items-center mt-8">
          <img src={qrcode} alt="QR Code" className="w-32 h-32 mr-10" />
          <div className="text-gray-300 text-2xl font-bold flex flex-col">
            <span>SCAN TO</span>
            <span>DOWNLOAD</span>
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://apps.apple.com"
            className="flex items-center bg-black text-white px-4 py-2 rounded"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="w-6 h-6 mr-2"
            />
            Download on the App Store
          </a>
          <a
            href="https://play.google.com"
            className="flex items-center bg-black text-white px-4 py-2 rounded"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-6 h-6 mr-2"
            />
            Get it on Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
