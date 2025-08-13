import React from "react";
import { Card, CardBody } from "@heroui/react";

const SkillsCard = ({ title, skills }) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <CardBody className="p-6">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20 font-mono"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default SkillsCard;
