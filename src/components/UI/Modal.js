import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { Fragment } from "react";

const Backdrop = () => {
  return <div className={classes.modal}></div>;
};

const ErrorModal = (props) => {
  const [exit, setExit] = useState(false);

  const hideModalHandler = () => {
    if (exit === false) {
      setExit(true);
      props.exit(true);
    }
  };

  return (
    <div className={classes.modal__content}>
      <button className={classes.modal__exit} onClick={hideModalHandler}>
        X
      </button>
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ErrorModal exit={props.exit}>{props.children}</ErrorModal>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
