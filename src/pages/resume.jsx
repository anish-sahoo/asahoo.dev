import * as React from "react";
import Layout from "./layout";
import PageHero from "../components/PageHero";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import SkillsCard from "../components/SkillsCard";
import { Button } from "@heroui/react";
import northeasternLogo from "../images/NU_RGB_Notched-N_wordmark_RW.png";
import {
  jobs,
  languages,
  frameworks,
  tools,
  databases,
  education,
  classes,
} from "../resume";

const Resume = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-2">
        <PageHero 
          title="Resume"
          subtitle="My educational background, work experience, and technical skills"
        />
        
        {/* Download Button */}
        <div className="text-center mb-12">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg transition-colors"
            onPress={() => window.open('/resume.pdf', '_self')}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume PDF
          </Button>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                institution={edu.institution}
                degree={edu.degree}
                graduation={edu.graduation}
                logo={edu.institution === "Northeastern University" ? northeasternLogo : edu.logo}
                logoAlt={edu.logoAlt}
                courses={edu.institution === "Northeastern University" ? classes : edu.courses}
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">Work Experience</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <ExperienceCard key={index} job={job} index={index} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 font-mono">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillsCard title="LANGUAGES" skills={languages} />
            <SkillsCard title="FRAMEWORKS" skills={frameworks} />
            <SkillsCard title="DATABASES" skills={databases} />
            <SkillsCard title="TOOLS & INFRASTRUCTURE" skills={tools} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;

export const Head = () => <title>Resume - Anish's Portfolio</title>;
