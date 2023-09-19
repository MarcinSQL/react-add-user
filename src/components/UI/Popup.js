import { useState } from "react";
import classes from "./Popup.module.css";

const Popup = (props) => {
  const [exit, setExit] = useState(false);

  const hidePopupHandler = () => {
    if (exit === false) {
      setExit(true);
      props.exit(true);
    }
  };

  return (
    <div className={classes.popup}>
      <div className={classes.popup__content}>
        <button className={classes.popup__exit} onClick={hidePopupHandler}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Popup;
