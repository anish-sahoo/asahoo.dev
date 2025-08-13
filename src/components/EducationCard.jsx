import React from "react";
import { Card, CardBody } from "@heroui/react";

const EducationCard = ({ 
  institution, 
  degree, 
  graduation, 
  logo, 
  logoAlt, 
  courses = [],
  logoClassName = "h-20 w-auto bg-black p-2 rounded-lg" 
}) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <CardBody className="p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src={logo}
              className={logoClassName}
              alt={logoAlt}
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">
              {institution}
            </h3>
            <p className="text-blue-300 font-medium mb-2">
              {degree}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              {graduation.status}: <span className="text-white font-semibold">{graduation.date}</span>
            </p>
            
            {courses.length > 0 && (
              <details className="group">
                <summary className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm mb-3">
                  Relevant Coursework →
                </summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                  {courses.map((course) => (
                    <div
                      key={course.name}
                      className="group/course"
                    >
                      <span className="text-gray-300 text-sm group-hover/course:text-white transition-colors">
                        {course.name}
                      </span>
                      <p className="text-xs text-gray-500 group-hover/course:text-gray-400 transition-colors">
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
