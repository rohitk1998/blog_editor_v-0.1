import { ApplicationComponent } from "./component/application.component";
import "./App.css";
import { useState } from "react";
import CustomEditor from "./component/CustomEditor/CustomEditor"

function App() {
  return (
    <div className="container">
      {/* <ApplicationComponent /> */}
      <CustomEditor/>
    </div>
  );
}

export default App;
