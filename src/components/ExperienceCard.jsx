import React from "react";
import { Card, CardBody } from "@heroui/react";

const ExperienceCard = ({ job, index }) => {
  return (
    <Card className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <CardBody className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h3 className="text-xl font-bold text-white">{job.company}</h3>
          <span className="text-gray-400 font-mono text-sm">{job.date}</span>
        </div>

        {job.positions.map((position, positionIndex) => (
          <div key={positionIndex} className={positionIndex > 0 ? "mt-6" : ""}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
              <h4 className="text-blue-300 font-medium">{position.title}</h4>
              {position.date && (
                <span className="text-gray-500 font-mono text-sm">
                  {position.date}
                </span>
              )}
            </div>

            <ul className="space-y-2">
              {position.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-3">
                  <span className="text-blue-400 text-sm mt-1">•</span>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default ExperienceCard;
