import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="referrer-policy"
      name="referrer"
      content="no-referrer-when-downgrade"
    />,

    <script
      key="analytics"
      defer
      data-domain="asahoo.dev"
      src="https://analytics.asahoo.dev/js/script.js"
    />,
  ]);
};
