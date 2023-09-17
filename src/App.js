import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [enteredData, setEnteredData] = useState([]);
  const userData = (userInputs) => {
    setEnteredData((prevUserInputs) => {
      return [userInputs, ...prevUserInputs];
    });
  };
  
  return (
    <div>
      <Form userInputs={userData} />
      <Results userInputs={enteredData} />
    </div>
  );
}

export default App;
