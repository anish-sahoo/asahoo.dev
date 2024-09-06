import "./src/styles/global.css";

export const onInitialClientRender = () => {
  const plausibleScript = document.createElement('script');
  plausibleScript.setAttribute('async', true);
  plausibleScript.setAttribute('defer', true);
  plausibleScript.setAttribute('data-domain', 'asahoo.dev');
  plausibleScript.src = 'https://analytics.asahoo.dev/js/script.js';
  document.body.appendChild(plausibleScript);
};
