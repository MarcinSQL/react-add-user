import React, { useState } from "react";
import Button from "./UI/Button";
import classes from "./FormInputs.module.css";

const FormInputs = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValidate, setIsValidate] = useState(true);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      age: age,
    };

    if (userData.age >= 150) {
      setIsValidate(true);
      return props.isValidate(true), setUsername(""), setAge("");
    } else {
      setIsValidate(false);
      props.enteredData(userData);
    }

    setUsername("");
    setAge("");
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label>
        Username
        <input type="text" value={username} onChange={usernameChangeHandler} />
      </label>
      <label>
        Age (Years)
        <input type="number" value={age} onChange={ageChangeHandler} min={1} />
      </label>
      <Button type="submit">Add user</Button>
    </form>
  );
};

export default FormInputs;
