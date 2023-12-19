import * as React from "react";
import Layout from "./layout";

const Contact = () => {
  return (
    <Layout>
      <p>
        Need a developer?{" "}
        <a
          href="mailto:sahoo.an@northeastern.edu"
          class="text-blue-300 font-bold"
        >
          Contact me.
        </a>
      </p>
    </Layout>
  );
};

export default Contact;
