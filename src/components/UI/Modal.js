import { useState } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const [exit, setExit] = useState(false);

  const hideModalHandler = () => {
    if (exit === false) {
      setExit(true);
      props.exit(true);
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal__content}>
        <button className={classes.modal__exit} onClick={hideModalHandler}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
