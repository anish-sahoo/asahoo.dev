import React from "react";

const PageFooter = ({ message, linkText, linkUrl }) => {
  return (
    <div className="text-center mt-16 mb-8">
      <p className="text-gray-400 font-mono text-sm">
        {message}{" "}
        {linkText && linkUrl && (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {linkText}
          </a>
        )}
        {linkText && linkUrl && " for the latest updates."}
      </p>
    </div>
  );
};

export default PageFooter;
