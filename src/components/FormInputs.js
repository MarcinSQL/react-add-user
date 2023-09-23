import React, { useState, useRef } from "react";
import Button from "./UI/Button";
import classes from "./FormInputs.module.css";

const FormInputs = (props) => {
  const nameInputRef = useRef("");
  const ageInputRef = useRef("");

  const [isValidate, setIsValidate] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };

    if (userData.age >= 150 || userData.username === "" || userData.age === "") {
      return props.isValidate(true);
    } else {
      setIsValidate(false);
      props.enteredData(userData);
    }

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label>
        Username
        <input type="text" ref={nameInputRef}/>
      </label>
      <label>
        Age (Years)
        <input type="number" min={1} ref={ageInputRef}/>
      </label>
      <Button type="submit">Add user</Button>
    </form>
  );
};

export default FormInputs;
