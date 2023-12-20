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
        <Link to="/">Go home</Link>.
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
