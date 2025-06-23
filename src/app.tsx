import React from "react";
import * as ReactDOM from "react-dom/client";
import { Button } from "./components/ui/button";

const App = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center mx-10">
      <h1 className="text-4xl font-bold text-gray-800">
        🚀 Electron React Tailwind Typescript Starter
      </h1>
      <p className="mt-4 text-md text-gray-600">
        This starter repository provides a ready-to-use project template for
        building cross-platform desktop applications with Electron, React,
        TypeScript, and Tailwind CSS, utilizing Electron Forge for easy
        packaging and publishing.
      </p>
      <Button>
        hello world
      </Button>
    </div>
  </div>
);

function render() {
  const rootElement = document.getElementById("app");
  if (!rootElement) throw new Error("Failed to find the root element");
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

render();
