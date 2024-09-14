import React from "react";

const AchievementCard = ({ title, date, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">Achieved on {new Date(date).toLocaleDateString()}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AchievementCard;
