import "./src/styles/global.css";

export const onInitialClientRender = () => {
  const plausibleScript = document.createElement('script');
  plausibleScript.setAttribute('async', true);
  plausibleScript.setAttribute('defer', true);
  plausibleScript.setAttribute('data-domain', 'asahoo.dev');  // replace with your domain
  plausibleScript.src = 'https://analytics.asahoo.dev/js/plausible.js';  // replace with the correct script path
  document.body.appendChild(plausibleScript);
};
