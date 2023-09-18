import Card from "./Card";
import classes from "./Popup.module.css";

const Popup = (props) => {
    const hidePopupHandler = () => {
        
    }
  return (
    <div className={classes.popup}>
      <div className={classes.popup_content}>
        <span className="exit-btn" onClick={hidePopupHandler}>X</span>
        {props.children}
        </div>
    </div>
  );
};

export default Popup;
