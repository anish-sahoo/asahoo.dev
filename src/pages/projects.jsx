import * as React from "react";
import Layout from "./layout";
import ProjectCards from "../components/ProjectCards";

var projectS = [{
  name: "Expiry Date Reminder",
  description: "Project where user can store the expiry date of their products and get a reminder when the expiry date is near.",
  badges: [
    "Java",
    "SQLite",
    "Android Studio",
  ],
},
{
  name: "Library Management System",
  description: "Project where user can manage the books in the library.",
  badges: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Xano",
    "Netlify"
  ]
}
];

const Projects = () => {
  return (
    <Layout>
      <ProjectCards projects={projectS} />
    </Layout>
  );
};

export default Projects;
