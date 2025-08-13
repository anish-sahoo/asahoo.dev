import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <div className="px-4 py-10 text-xl font-mono text-gray-300">
        <h1>Page not found</h1>
        <p>Sorry, we couldn't find what you were looking for.</p>
        <Link to="/" className="text-blue-700">
          Click Here to Go Home
        </Link>
        .
        <p className="pt-8">
          By the way, this is the composition of my GitHub repositories:
        </p>
        <img
          src="https://github-readme-stats-anish-sahoo.vercel.app/api/top-langs/?username=anish-sahoo&theme=react&hide_border=true&count_private=true&include_all_commits=true&langs_count=20&layout=compact&card_width=334&hide=Jupyter+Notebook"
          className="shadow-lg"
          alt="GitHub Stats"
        ></img>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not Found - Anish's Portfolio</title>;
