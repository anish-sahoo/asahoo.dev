import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="analytics"
      defer
      data-domain="asahoo.dev"
      src="https://analytics.asahoo.dev/js/script.js"
    />,
  ]);
};
