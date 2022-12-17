import React from "react";
import ReactDOM from "react-dom/client";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/webgl.loader.js",
    dataUrl: "build/webgl.data",
    frameworkUrl: "build/webgl.framework.js",
    codeUrl: "build/webgl.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
