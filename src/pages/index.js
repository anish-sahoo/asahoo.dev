import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";

const IndexPage = () => {
  return (
    <Layout>
      <div class="">
        <h1>Hello.</h1>
        <h2>
          I'm Anish, a developer attending college in beautiful San Francisco.
        </h2>
        <h2 class="py-10">This website is still being built!</h2>
        <Button>Click me</Button>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anish's Portfolio</title>;
