import React from "react";

const EmptyState = ({ icon, title, subtitle }) => {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
};

export default EmptyState;
