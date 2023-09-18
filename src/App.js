import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import Popup from "./components/UI/Popup";

function App() {
  const [enteredData, setEnteredData] = useState([]);
  const [popupDisplay, setPopupDisplay] = useState(false);

  const userData = (userInputs) => {
    userInputs = {
      ...userInputs,
      id: Math.random(),
    };
    setEnteredData((prevUserInputs) => {
      return [userInputs, ...prevUserInputs];
    });
  };

  const isValidate = (value) => {
    if (value === true) setPopupDisplay(true);
    else if (value === false) setPopupDisplay(false);
  };

  console.log(popupDisplay);

  return (
    <div>
      <Form userInputs={userData} isValidate={isValidate} />
      <Results userInputs={enteredData} />
      {popupDisplay === true ? <Popup>
        <h1>Something is wrong with your data</h1>
        <p>Please enter some others values.</p>
      </Popup> : ""}
    </div>
  );
}

export default App;
