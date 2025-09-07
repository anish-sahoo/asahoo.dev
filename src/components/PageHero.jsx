import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default PageHero;
