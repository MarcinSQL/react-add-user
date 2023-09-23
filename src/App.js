import React, { useState, Fragment } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import Modal from "./components/UI/Modal";

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

  const exitPopup = (value) => {
    if (value) {
      setPopupDisplay(false);
    }
  };

  return (
    <Fragment>
      <Form userInputs={userData} isValidate={isValidate} />
      <Results userInputs={enteredData} />
      {popupDisplay === true ? (
        <Modal exit={exitPopup}>
          <h1>Something is wrong with your data</h1>
          <p>Please enter some others values.</p>
        </Modal>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default App;
