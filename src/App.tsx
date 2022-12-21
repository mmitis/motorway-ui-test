import { FormPage } from "features/FormPage";
import { ImagesPage } from "features/ImagesPage";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <FormPage />
      <ImagesPage />
    </div>
  );
};

export default App;
