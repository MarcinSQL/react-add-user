import Button from "./UI/Button";
import classes from "./FormInputs.module.css";

const FormInputs = () => {
    return (
        <form className={classes.form}>
            <label> Username
                <input type="text" />
            </label>
            <label> Age (Years)
                <input type="number" min={1}/>
            </label>
            <Button>Add user</Button>
        </form>
    );
}

export default FormInputs;